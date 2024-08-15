module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#4B0082", // purple
        secondary: "#3B3B3B", // slate gray
        accent: "#E6E6FA", // lavender
        background: "#e0dede", // Light grey
        foreground: "#2C2C2C", // Dark Gray
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      transitionDuration: {
        2000: "2000ms",
      },
      backgroundImage: {
        'hero': "url('/images/hero.svg')",
        'gradient-conic': 'conic-gradient( var(--tw-gradient-stops))',
        'gradient-border': 'linear-gradient(to bottom, var(--tw-gradient-from) 50%,  var(--tw-gradient-to) 50%)'
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
