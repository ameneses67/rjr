import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";


// https://astro.build/config
export default defineConfig({
  site: "https://rjr.pages.dev",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
  ],
  output: "server",
});
