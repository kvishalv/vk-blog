import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().transform((str) => new Date(str)),
    author: z.string().default('Vishal'),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    keywords: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
