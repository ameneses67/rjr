// Librerías
import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MardownIt from "markdown-it";

// Utilidades
import { slugify, removeTags } from "../utils/utils";

const parser = new MardownIt();

export async function GET(context: APIContext) {
  const blog = await getCollection("blog");
  return rss({
    title: "Retirate Joven y Rico",
    description: "¡Edúcate! Y tomo el control de tu destino financiero",
    site: context.site ?? "",
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: removeTags(post.data.snippet),
      customData: post.data.category,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/${slugify(post.data.category)}/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body)),
      image: post.data.image.src,
    })),
  });
}
