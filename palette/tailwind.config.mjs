/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			container: {
				screens: {
					md: '750px',
					lg: '970px',
					xl: '1300px'
				}
			},
			colors: {
				primary: 'var(--primary)',
				body: 'var(--bg-body)',
				secondary: 'var(--bg-secondary)',
				'night-body': 'var(--night-bg-body)',
				'night-secondary': 'var(--night-bg-secondary)',
				'night-color-dark': 'var(--night-color-dark)',
				title: 'var(--color-title)',
				'color-secondary': 'var(--color-secondary)',
				'night-border-light': 'var(--night-border-light)',
				'input-bg': '#f3f5f6',
				'input-color': "#9199a1"
			}
		},
	},
	plugins: [],
}
