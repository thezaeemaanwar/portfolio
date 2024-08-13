module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#4B0082", // purple
        secondary: "#3B3B3B", // slate gray
        accent: "#E6E6FA", // lavender
        "background": "#F0F0F0", // Light Gray
        "accent-text": "#2C2C2C", // Dark Gray
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
