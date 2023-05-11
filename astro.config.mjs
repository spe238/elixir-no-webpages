import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { globalHomeRoute } from './src/globalVariables';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react()],
	site: 'https://ELIXIR-NO.github.io',
	base: globalHomeRoute,
	output: 'server',
});
