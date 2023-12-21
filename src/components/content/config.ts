import { defineCollection, z } from 'astro:content';

const organisationCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
        address: z.string().optional(),
        map: z.string().optional(),
    }),
});

export const collections = {
    'organisation': organisationCollection
};