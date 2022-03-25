module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGray: "#232323",
        gray: "#222525",
        white: "#fffffe",
        teriary: "#f8f5f2",
        highlight: "#078080",
        accent: "#f45d48",
      },
      width: {
        112: "30rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
