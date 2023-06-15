/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "5rem",
    },
    extend: {
      colors: {
        blue: "#3A38FF",
        bluesoft: "#F9FBFC",
        navy: "#101041",
        purplesoft: "#E5E4FF",
        grey: "#DFE2E7",
        darkgrey: "#949293",
        darkgrey2: "#E7EBED",
        purple: "#6261D8",
        green: "#316762",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        moveSlideToLeft: {
          "0%": { transform: "translateX(100%)" },
          to: { transform: "translateX(0%)" },
        },
        moveSlideToRight: {
          "0%": { transform: "translateX(0%)" },
          to: { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
