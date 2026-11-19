import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { TOOLS } from './config/tools';

const SLUGS = new Set(TOOLS.map((t) => t.slug));

/**
 * Guides: English articles that answer the questions around a task (why a PDF is large, which format to use) and link to
 * the tools that do it. The file name is the URL: src/content/guides/why-is-my-pdf-so-large.md is /guides/why-is-my-pdf-so-large
 */
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    /** The search result snippet and the summary on the guides list: one or two sentences */
    description: z.string().max(170),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    /** Tools the guide is about, linked at the end; a slug that doesn't exist fails the build */
    tools: z.array(z.string().refine((s) => SLUGS.has(s), { message: 'Unknown tool slug: check src/config/tools.ts' })).default([]),
  }),
});

export const collections = { guides };
