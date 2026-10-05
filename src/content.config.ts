import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    period: z.string(),
    order: z.number(),
    tags: z.array(z.string()).default([]),
    // Drafts render in `npm run dev` only and are never published.
    draft: z.boolean().default(true),
  }),
});

export const collections = { work };
