/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				banner1: "url(https://i.ibb.co/6wChJMV/banner-3.jpg)",
				banner2: "url(https://i.ibb.co/Y3QKpXB/banner-1.jpg)",
				banner3: "url(https://i.ibb.co/D9cMcv5/banner-2.jpg)",
				coverImg: "url(https://i.ibb.co/XC1DDKp/cover.jpg)",
			},
		},
	},
	plugins: [require("daisyui")],
};
