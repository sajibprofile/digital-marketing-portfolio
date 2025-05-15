/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		container: {
			center: true,
			padding: "2rem",
		},
		screens:{
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},fontFamily:{
			primary: "var(--font-jetbrainsMono)",
		},
  	extend: {
  	 colors: {
			primary: '#1c1c22',
			buttoncolor: '#070753',
			accent:{
				DEFAULT: '#00FF99',
				hover: '#00e187'
			}
		 }
  	 
  	}
  },
  plugins: [require("tailwindcss-animate")],
}