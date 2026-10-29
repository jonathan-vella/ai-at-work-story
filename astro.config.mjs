import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://jonathan-vella.github.io",
  base: "/ai-at-work-story",
  integrations: [mdx()],
});
