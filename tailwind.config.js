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
			fontFamily: {
				fredoka: "fredoka-regular",
				"fredoka-bold": "fredoka-bold",
				"fredoka-medium": "fredoka-medium",
				"fredoka-semibold": "fredoka-semibold",
				"fredoka-light": "fredoka-light",
			},
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
