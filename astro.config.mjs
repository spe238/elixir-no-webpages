import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  routes: {
    '/news/:slug': '/news/[...news].astro',
    '/organisation/:slug': '/organisation/[...organisation].astro',
  },
  assetsInclude: ['**/*.md'],
  base: '/elixir-no-webpages/',
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), mdx()]
});
