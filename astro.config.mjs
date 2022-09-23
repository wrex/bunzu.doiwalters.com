import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
// import remarkDirective from "remark-directive";
// import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(),
    // Enable React for the Algolia search component.
    react(),
  ],
  site: `https://bunzu.doiwalters.com`,
  // adapter: netlify(),
  markdown: {
    // remarkPlugins: [remarkDirective],
    // extendDefaultPlugins: true,
  },
});
