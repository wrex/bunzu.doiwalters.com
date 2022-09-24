import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

// import netlify from "@astrojs/netlify/functions";

import mdx from "@astrojs/mdx";

// https://astro.build/config

export default defineConfig({
  integrations: [preact(), react(), svelte(), mdx()],
  site: `https://bunzu.doiwalters.com`,
  // adapter: netlify(),
});
