/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans"],
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr",
      },
    },
  },
  plugins: [],
};
