import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://elixir-no.github.io/',
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
