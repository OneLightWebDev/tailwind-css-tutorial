/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        error: {
          DEFAULT: "#ff0000",
          light: "#ff7d7d",
          dark: "#b20000",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
