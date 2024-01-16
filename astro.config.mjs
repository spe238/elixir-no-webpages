import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  routes: {
    '/elixir-no-webpages/news/:slug': '/elixir-no-webpages/news/[...news].astro',
    '/elixir-no-webpages/organisation/:slug': '/organisa/[...organisation].astro',
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
