import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  buildOptions: {
    baseUrl: '/elixir-no-webpages/',
  },
  includes: ['src/**/*.astro', 'src/**/*.mdx'],
  styles: {
    include: 'src/styles/**/*.css',
  },
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), mdx()]
});
