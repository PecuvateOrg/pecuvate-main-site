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
];
