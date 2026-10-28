// Kits: public repositories an AI agent clones into the user's own folder and then runs.
// The shared setup guide (pages/kits/index.astro) is the one source for "get your agent ready";
// each kit's own START-HERE links back to it rather than restating the steps.

export interface Kit {
  slug: string;
  name: string;
  summary: string;
  repo: string;
  // The message pasted into the agent's chat. {name} is replaced by what the user types.
  prompt: string;
  promptField: { label: string; placeholder: string };
  // What the kit needs beyond the shared setup.
  needs: { label: string; detail: string; href?: string }[];
  steps: { title: string; body: string }[];
  youDo: string[];
  notes: string[];
  // Release-signing key fingerprint (standard: one Pecuvate key for every product). A copy whose
  // allowed_signers shows a different fingerprint has been altered.
  fingerprint?: string;
}

export const kits: Kit[] = [
  {
    slug: 'finance',
    name: 'Finance kit',
    summary:
      'An AI agent on your own computer keeps your company’s books, prepares the year-end accounts and corporation tax return, and files them once you approve. For small UK limited companies filing micro-entity accounts.',
    repo: 'https://github.com/PecuvateOrg/finance-kit',
    prompt:
      'Please clone https://github.com/PecuvateOrg/finance-kit into this folder, read its instructions, and set me up. My company is called {name}.',
    promptField: { label: 'Your company name', placeholder: 'your company name' },
    needs: [
      {
        label: 'Python 3',
        detail:
          'The kit’s checks are small Python scripts. On Windows, install it from python.org and tick “Add python.exe to PATH”. On a Mac it arrives with Git’s command line tools. Your agent can check it’s there.',
        href: 'https://www.python.org/downloads/',
      },
      {
        label: 'A TinyTax account, when it’s time to file',
        detail:
          'Filing goes through your own account with TinyTax, HMRC-recognised filing software. The agent tells you when you need it.',
        href: 'https://tinytax.co.uk',
      },
    ],
    steps: [
      {
        title: 'It finds your company',
        body: 'From the name alone it looks up Companies House, your last accounts and your deadlines, shows you what it found, and asks only for what it couldn’t find, such as which bank you use.',
      },
      {
        title: 'It gets your bank lines in',
        body: 'It tells you the easiest route for your bank: a statement download in a couple of clicks, or a one-off connection if your bank has one.',
      },
      {
        title: 'It drafts the accounts',
        body: 'After your year end it records and proves every line, asks short questions about anything unclear, and drafts the accounts and tax figures, with a one-page summary in plain words.',
      },
      {
        title: 'You approve, then it files',
        body: 'It does a test run first, shows you exactly what will be filed, and files only when you say “approved, file”.',
      },
    ],
    youDo: [
      'Answer a few questions once.',
      'Download a statement each month, or connect your bank once.',
      'Decide the judgement calls the agent sets out, and approve the accounts.',
    ],
    notes: [
      'Everything runs on your computer. Your figures stay in a folder there and never reach Pecuvate. Keep that folder private: back it up somewhere private, never to a public repository.',
      'This is software, not an accountancy service and not tax advice. The agent prepares and checks; you, as director, are responsible for the accounts and returns, and nothing is filed without your approval.',
      'Not covered yet: VAT returns, payroll, companies with fixed assets to claim capital allowances on, periods longer than 12 months, and anything above micro-entity size. The agent says so and stops.',
    ],
    fingerprint: 'SHA256:mZvW7xg+DdYLjGmvjCH4s+9k5rvA3DOvi1hcCRvKlsg',
  },
];

export const agents = [
  {
    name: 'Claude Code',
    by: 'Anthropic',
    account: 'An Anthropic account on a paid Claude plan',
    signup: 'https://claude.ai',
  },
  {
    name: 'Codex',
    by: 'OpenAI',
    account: 'A ChatGPT account on a paid plan',
    signup: 'https://chatgpt.com',
  },
  {
    name: 'Gemini Code Assist',
    by: 'Google',
    account: 'A Google account',
    signup: 'https://codeassist.google',
  },
] as const;

export const kitUrl = (slug: string) => `/kits/${slug}/`;
