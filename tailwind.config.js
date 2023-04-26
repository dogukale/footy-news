// eslint-disable-next-line no-undef
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				"verdigris": "#39AEA9",
				"pale-spring-bud": "#E5EFC1",
				"gunmetal": "#22333B",
				"silver": "#C3C3C3"
			},
			backgroundImage: {
				"football": "url('/src/assets/img/football.jpg')"
			}
		}
	},
	plugins: []
};