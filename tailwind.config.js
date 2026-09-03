/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Dela Gothic One", "sans-serif"],
        body: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
