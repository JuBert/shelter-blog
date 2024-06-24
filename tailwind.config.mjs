/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				primary: {
					prominent: 'var(--primary-800)',
					standard: 'var(--primary-700)',
					subtle: 'var(--primary-600)',
				},
				secondary: {
					prominent: 'var(--secondary-800)',
					standard: 'var(--secondary-700)',
					subtle: 'var(--secondary-600)',
				},
			},
		},
	},
	plugins: [],
}
