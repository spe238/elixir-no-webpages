/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'elixir-orange': '#F47D20',
				'elixir-grey': '#4D4848',
				'elixir-blue': '#005472',
				'elixir-green': '#BEBF32',
			},
		},
	},
	plugins: [],
};
