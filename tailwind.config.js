/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: colors.blue[100],
          DEFAULT: colors.blue[500],
          dark: colors.blue[700],
        },
      },
    },
  },
  plugins: [],
}
