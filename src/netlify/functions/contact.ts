// Contact form handler for pecuvate.com/contact.
// Checks the honeypot and Turnstile, then emails the enquiry to CONTACT_TO with the
// visitor as Reply-To. No confirmation email goes to the visitor (protects the
// sending domain's reputation from bot-typed addresses).

const CONTACT_TO = process.env.CONTACT_TO || 'enquiries@pecuvate.com';
const FROM = 'Pecuvate website <noreply@pecuvate.com>';
const TOPICS = ['A platform or app', 'Automation and AI', 'Operations and finance', 'Gears', 'Partnership', 'Something else'];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 120, email: 254, organisation: 160, message: 5000 };

const json = (statusCode: number, body: object) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

async function humanVerified(token: unknown, ip: string | undefined): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    // Production must have a secret; anywhere else (local test) skip the check.
    return process.env.CONTEXT !== 'production';
  }
  if (typeof token !== 'string' || !token) return false;
  const form = new URLSearchParams({ secret, response: token });
  if (ip) form.set('remoteip', ip);
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: form });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export const handler = async (event: { httpMethod: string; body: string | null; headers?: Record<string, string | undefined> }) => {
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed' });

  let input: Record<string, unknown>;
  try {
    input = JSON.parse(event.body ?? '{}');
  } catch {
    return json(400, { error: 'Invalid request' });
  }

  // Honeypot: people never fill this field. Pretend success so bots do not retry.
  if (typeof input.website === 'string' && input.website.trim()) return json(200, { success: true });

  const field = (k: keyof typeof LIMITS) => (typeof input[k] === 'string' ? (input[k] as string).trim().slice(0, LIMITS[k]) : '');
  const name = field('name');
  const email = field('email');
  const organisation = field('organisation');
  const message = field('message');
  const topic = typeof input.topic === 'string' && TOPICS.includes(input.topic) ? input.topic : 'Something else';

  if (!name || !email || !message) return json(400, { error: 'Please fill in your name, email and message.' });
  if (!EMAIL.test(email)) return json(400, { error: 'Please enter a valid email address.' });

  const ip = event.headers?.['x-nf-client-connection-ip'];
  if (!(await humanVerified(input.turnstileToken, ip))) {
    return json(400, { error: 'We could not confirm you are human. Please try again.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set');
    return json(500, { error: 'send_failed' });
  }

  // A distinct subject per enquiry, so mail clients do not merge enquiries into one thread.
  const subject = `Website enquiry: ${topic} – ${name}${organisation ? ` (${organisation})` : ''}`;
  const text = [
    `Topic: ${topic}`,
    `Name: ${name}`,
    `Email: ${email}`,
    organisation ? `Organisation: ${organisation}` : null,
    '',
    message,
    '',
    '— Sent from the contact form on pecuvate.com. Reply to this email to answer them.',
  ].filter((l) => l !== null).join('\n');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: FROM, to: [CONTACT_TO], reply_to: email, subject, text }),
    });
    if (!res.ok) {
      console.error('[contact] Resend returned', res.status, await res.text());
      return json(502, { error: 'send_failed' });
    }
  } catch (err) {
    console.error('[contact] Resend request failed', err);
    return json(502, { error: 'send_failed' });
  }

  return json(200, { success: true });
};
