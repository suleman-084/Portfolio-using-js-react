/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "5px 5px 15px #EDA3A5",
        "2xl": "5px 5px 15px #A19DE7",
      },
    },
  },
  plugins: [],
};
