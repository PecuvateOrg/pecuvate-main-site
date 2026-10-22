// Blog categories. The six pillars are the human needs Pecuvate always considers
// (PECUVATE KB `concepts/bfg-pillars`), listed in the order of the founder's
// focus hierarchy. Labels show the pillar and its meaning; never label them "BFG"
// on the public site. Categories are optional: a post may sit in none or several.
export const pillars = [
  { slug: 'reform', name: 'Reform', meaning: 'Our Environment', description: 'The man-made and natural world we live in, from food, housing and travel to the digital infrastructure we now depend on.' },
  { slug: 'nurture', name: 'Nurture', meaning: 'Our Development', description: 'How we develop at every stage of life, from newborn to maturity.' },
  { slug: 'entrepreneur', name: 'Entrepreneur', meaning: 'Our Value', description: 'Our value is determined by what we contribute to the world through our efforts and the work we do.' },
  { slug: 'motivate', name: 'Motivate', meaning: 'Our Drive', description: 'The forces that strengthen or weaken what drives us to act.' },
  { slug: 'health', name: 'Health', meaning: 'Our Sustenance', description: 'Physical and mental health, and what being healthy actually means.' },
  { slug: 'educate', name: 'Educate', meaning: 'Our Learning', description: 'What learning is really for, at every age.' },
  { slug: 'pecudemy-lab', name: 'Pecudemy Lab', meaning: '', description: 'Research into AI and education.' },
] as const;

export type PillarSlug = (typeof pillars)[number]['slug'];
export type Pillar = (typeof pillars)[number];

export const pillarSlugs = pillars.map((p) => p.slug) as [PillarSlug, ...PillarSlug[]];

export function pillarLabel(p: Pillar) {
  return p.meaning ? `${p.name} · ${p.meaning}` : p.name;
}

export function getPillar(slug: PillarSlug) {
  return pillars.find((p) => p.slug === slug)!;
}
