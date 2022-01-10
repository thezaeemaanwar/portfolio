module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: "#242A38",
        grey: "#4E596F",
        white: "#ffffff",
        pink: "#F54D64",
        orange: "#F88161",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      transitionDuration: {
        2000: "2000ms",
      },
    },
  },
  variants: {
    extend: {
      // transitionProperty: { top: "top", right: "right" },
    },
  },
  plugins: [],
};
