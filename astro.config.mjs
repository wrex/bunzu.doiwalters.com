import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import remarkRuby from "remark-ruby";

// import netlify from "@astrojs/netlify/functions";

import mdx from "@astrojs/mdx";

// https://astro.build/config

export default defineConfig({
  integrations: [
    preact(),
    react(),
    svelte(),
    mdx({
      remarkPlugins: [remarkRuby],
    }),
  ],
  site: `https://bunzu.doiwalters.com`,
  // adapter: netlify(),
});
