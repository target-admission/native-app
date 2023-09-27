/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./index.{js,jsx,ts,tsx}",
		"./app/**/*.{js,jsx,ts,tsx}",
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {},
			colors: {
				primary: {
					DEFAULT: "#ED2024",
				},
				secondary: {
					DEFAULT: "#7359F2",
				},
			},
		},
	},
	plugins: [],
};
