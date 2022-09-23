import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte"; // import netlify from "@astrojs/netlify/functions";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [// Enable Preact to support Preact JSX components.
  preact(), // Enable React for the Algolia search component.
  react(), svelte(), mdx()],
  site: `https://bunzu.doiwalters.com`,
  // adapter: netlify(),
  markdown: {// extendDefaultPlugins: true,
  }
});