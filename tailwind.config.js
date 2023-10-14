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
        startButtonWMobile: "15rem",
      },
      height: {
        desktopH: "60rem",
        bigBH: "65px",
        backButtonH: "25px",
        smBH: "50px",
        startButtonH: "300px",
        mainContainerH: "60rem",
        cardHeight: "30rem",
        navBarHeight: "4.5rem",
        informationHeight: "60vh",
        mainPageHeight: "100em",
      },
      top: {
        mobileTop: "10px",
      },
      colors: {
        customPink: "#FF6095",
        customGrey: "#414141",
        customWhite: "#FEF4FF",
        inputGrey: "#555555",
        cardBackground: "#4F4F4F",
        primaryColorGrayishBlue: "hsl(217, 19%, 35%)",
        primaryColorBlue: "hsl(217, 90%, 31%)",
        primaryColorWhite: "hsl(0, 0%, 100%)",
        primaryColorBlackishBlue: "rgb(25, 33, 46)",
        primaryColorBlackishBlueOpacity: "rgba(25, 33, 46, 0.8)",
        neutralLightGray: "hsl(0, 0%, 81%)",
        neutralGrayishBlue: "hsl(210, 46%, 95%)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
        be: ["var(--bebas-neue)"],
      },
      fontSize: {
        titleSize: "120px",
        welcomeSize: "150px",
        testimonialBodySize: "13px",
        informationSubtitleSize: "30px",
      },
      fontWeight: {
        testimonialh1weight: "600",
        testimonialh2andpFontWeight: "500",
      },
      backgroundImage: {
        "hero-image": "url('/public/newspaperbackground.jpg')",
      },
    },
  },
  plugins: [],
};
