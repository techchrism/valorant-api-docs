/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'main': '300px 1fr',
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
	darkMode: 'media'
}
