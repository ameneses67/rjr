// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Define your collection(s)
const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      title: z.string(),
      snippet: z.string(),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
      publishDate: z.string().transform((str) => new Date(str)),
      updateDate: z.string().transform((str) => new Date(str)),
      category: z.enum([
        "Educación financiera",
        "Pon tu dinero a trabajar",
        "Piensa como rico",
      ]),
      author: z.string().default("Ponchito"),
      tags: z.array(z.string()),
    }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
};
