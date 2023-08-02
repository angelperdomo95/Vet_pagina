
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff7c39",
        secondary: "#EAEAFC",
        footer: "#c00000",
      },
    },
  },
  plugins: [],
};