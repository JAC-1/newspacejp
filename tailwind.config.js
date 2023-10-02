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
        startButtonW: "25rem",
        inputWidth: "48rem",
        barInputHight: "6.5rem",
        bioInputHight: "17rem",
        cardWidth: "20rem",
      },
      height: {
        desktopH: "90rem",
        bigBH: "65px",
        backButtonH: "25px",
        smBH: "50px",
        startButtonH: "300px",
        mainContainerH: "60rem",
        cardHeight: "30rem",
      },
      colors: {
        customPink: "#FF6095",
        customGrey: "#414141",
        customWhite: "#FEF4FF",
        inputGrey: "#555555",
        cardBackground: "#4F4F4F",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
        be: ["var(--bebas-neue)"],
      },
      fontSize: {
        titleSize: "120px",
        welcomeSize: "150px",
      },
      backgroundImage: {
        "hero-image": "url('/public/newspaperbackground.jpg')",
      },
    },
  },
  plugins: [],
};
