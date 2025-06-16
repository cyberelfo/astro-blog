import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        image: image(),
        alt: z.string(),
    }),
});

export const collections = {
    blog: blogCollection,
};