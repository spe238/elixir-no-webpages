import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/ELIXIR-NO/elixir-no-webpages',
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
