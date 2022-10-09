import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import remarkRuby from "remark-ruby"; // import netlify from "@astrojs/netlify/functions";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    react(),
    svelte(),
    mdx({
      remarkPlugins: [remarkRuby],
    }),
    sitemap(),
  ],
  site: `https://bunzu.doiwalters.com`, // adapter: netlify(),
});
