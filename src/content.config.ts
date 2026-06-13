import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        author: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        youtube: z.coerce.string().optional(),
        vimeo: z.coerce.string().optional(),
        category: z.string(),
        categories: z.array(z.string()).optional(),
        draft: z.boolean().optional().default(false),
        robots: z.string().optional(),
    }),
});

export const collections = {
    blog: blogCollection,
};