/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "Arial", "sans-serif"],
      poppins: ["Poppins", "Arial", "sans-serif"],
    },
    backgroundImage: {
      "contact-hero-image": "url('/assets/png/contact-hero-bg.png')",
      "contact-hero-image-phone":
        "url('/assets/png/contact-hero-phone-bg.png')",

      // "header-img-mobile":"url('/assets/jpg/mobile.jpg')",
      // "header-img-bg":"url('/assets/png/mijozlar.png')",
      // "header-img-mobile2":"url('/assets/jpg/mobile2.jpg')",
      // "header-img2":"url('/assets/png/maxsus-kiyimlar.png')",
      // "header-img-mobile3":"url('/assets/jpg/mobile2.jpg')",
      // "header-img3":"url('/assets/png/hodimlar.png')"
    },
    extend: {},
    colors: {
      "mobile-header-cl": "#fbfbfb",
      "footer-mobile-cl": "#5b4028",
      "footer-desktop-cl": "#9e8670",
      "light-gray": "#fcfcff",
      "socials-icon-cl": "rgba(203, 203, 203, 0.23)",
      "footer-border-cl": "#d1d1d1",
      "navbar-rectangle-cl": "#c7c7c7",
      "location-iframe-border-cl": "#b5b5b5",
      "contact-input-cl": "#f6f6f6",
      "ultra-light-gray": "#f5fbfd",
      orange: "#ef7f1a",
      white: "#ffffff",
      black: "#000000",
      black_50: "rgba(0,0,0,0.5)",
      orange_20: "rgba(239,127,26,0.2)",
      black_10: "rgba(0,0,0,0.1)",
      gray: "#eaeaea",
    },
    extend: {},
  },
  plugins: [],
};