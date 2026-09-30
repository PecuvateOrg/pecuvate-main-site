import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Pecuvate blog. Scope: pieces on the Pecuvate Mission only — see the
// public-positioning page in the Pecuvate KB. Source of truth for drafts is the
// Notion Content Library; a post lands here as Markdown when it is published.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Shaun Barnett'),
    // Where the piece first appeared, if it was published elsewhere first.
    originalUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
