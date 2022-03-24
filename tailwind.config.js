module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
