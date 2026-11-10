// Gears: the public name for Pecuvate's engines (repos stay "<name>-engine").
// The public name lives ONLY here. To rename: change GEARS, move pages/gears/, and add a
// redirect in netlify.toml from the old path (as /kits/ → /gears/ does).
export const GEARS = { plural: 'Gears', singular: 'Gear', path: 'gears' } as const;

export const gearsUrl = () => `/${GEARS.path}/`;
export const gearUrl = (slug: string) => `/${GEARS.path}/${slug}/`;

export type GearStatus = 'available' | 'in-development';

export interface Gear {
  slug: string;
  name: string; // e.g. "Finance" → shown as "Finance Gear"
  status: GearStatus;
  summary: string;
  forWho: string;
  tools: { title: string; body: string }[];
  notes: string[];
  // Interim route while the gear is in development, if one exists.
  interim?: { label: string; href: string };
}

export const gears: Gear[] = [
  {
    slug: 'finance',
    name: 'Finance',
    status: 'in-development',
    summary:
      'Keep your company’s books, prepare the year-end accounts and corporation tax return, and file them once you approve, by asking your AI app.',
    forWho: 'Small UK limited companies filing micro-entity accounts.',
    tools: [
      { title: 'Find your company', body: 'Looks up Companies House, your last accounts and your deadlines from the company name alone.' },
      { title: 'Bring in bank lines', body: 'Reads a statement download or a one-off bank connection, and proves every line against your balance.' },
      { title: 'Draft the accounts', body: 'Records each line, asks short questions about anything unclear, and drafts the accounts and tax figures with a plain summary.' },
      { title: 'File on approval', body: 'Shows you exactly what will be filed, and files only when you say so.' },
    ],
    notes: [
      'This is software, not an accountancy service and not tax advice. You, as director, are responsible for the accounts and returns, and nothing is filed without your approval.',
      'Not covered yet: VAT returns, payroll, capital allowances on fixed assets, periods longer than 12 months, and anything above micro-entity size.',
    ],
    interim: { label: 'Until it’s ready, the finance kit is on GitHub', href: 'https://github.com/PecuvateOrg/finance-kit' },
  },
  {
    slug: 'pecusign',
    name: 'PecuSign',
    status: 'in-development',
    summary:
      'Have documents signed electronically by asking your AI app. Your AI writes the document; PecuSign collects the signatures, seals the signed copy and hands it back to you.',
    forWho: 'Organisations that send agreements, board papers or contracts for signature and want their AI app to handle it.',
    tools: [
      { title: 'Prepare', body: 'Takes the finished PDF and the signers, with an order if it matters: everyone at once, one after another, or some together and then the next.' },
      { title: 'Send on approval', body: 'Shows you who will be emailed and sends only when you confirm.' },
      { title: 'Sign', body: 'Each signer reads the document, agrees, types or draws their signature, and confirms with a code sent to their email.' },
      { title: 'Seal and return', body: 'Builds one signed PDF with a certificate of what happened and an independent timestamp, and sends it to everyone.' },
    ],
    notes: [
      'We do not keep a copy of your documents. You download the signed copy and save it; the files are deleted 30 days after completion. Paid storage keeps them locked for seven years.',
      'Electronic signatures are recognised in the UK under the Electronic Communications Act 2000. Some documents, such as certain deeds, have extra formality rules.',
    ],
  },
];
