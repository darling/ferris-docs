const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		colors: {
			green: colors.green,
			gray: colors.gray,
			red: colors.rose,
			blue: colors.blue,
			indigo: colors.indigo,
			yellow: colors.yellow,
			white: colors.white,
			black: colors.black,
		},
		fontFamily: {
			sans: ['Inter Var', 'sans-serif'],
			serif: ['Roboto Slab', 'serif'],
			mono: ['Roboto Mono', 'mono'],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};
