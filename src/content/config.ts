import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  slug: ({ defaultSlug, data }) => {
    // Use `permalink` from the entry’s frontmatter as the slug, if it exists.
    // Otherwise, fall back to the default slug.
    return data.permalink || defaultSlug;
  },
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string().optional(),
    publishDate: z.date().optional().default(() => new Date()).transform(str => new Date(str)),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    coverSVG: z.string().optional(),
    coverImage: z.string().optional(),
    socialImage: z.string().optional(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    extra: z.array(z.string()).optional(),
    minutesRead: z.string().default('2 min read').optional(),
    permalink: z.string().optional(),
    // url: z.string().optional(),
    // file: z.string().optional(),
  }),
});

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.date().optional().default(() => new Date()).transform(str => new Date(str)),
    draft: z.boolean().optional(),
    coverSVG: z.string().optional(),
    coverImage: z.string().optional(),
    socialImage: z.string().optional(),
  }),
});
export const collections = {
  blog,
  pages,
};