/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        bigBW: "207px",
        backButtonW: "51px",
      },
      height: {
        bigBH: '65px',
        backButtonH: '25px',
      }, 
      colors: {
        customPink: "#FF6095",
        customGrey: "#414141",
        customWhite: "#FEF4FF"
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
        be: ['var(--bebas-neue)']
      }

    },
  },
  plugins: [],
};
