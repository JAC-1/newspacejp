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
        smBW: "120px",
        backButtonW: "51px",
        inputWidth: "48rem",
        barInputHight: "6.5rem",
        bioInputHight: "17rem",

      },
      height: {
        bigBH: '65px',
        backButtonH: '25px',
        smBH: '50px',
        mainContainerH: '60rem',
      }, 
      colors: {
        customPink: "#FF6095",
        customGrey: "#414141",
        customWhite: "#FEF4FF",
        inputGrey: "#555555"
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
        be: ['var(--bebas-neue)']
      },
      fontSize: {
        titleSize: "120px"
        
      }
    },
  },
  plugins: [],
};
