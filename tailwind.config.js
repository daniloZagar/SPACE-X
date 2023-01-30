/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        spaceX: "url('./assets/images/spaceX.jpg')",
      },
    },
    colors: {
      darkBlue: "#033b74",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
