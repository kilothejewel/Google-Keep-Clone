/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Product Sans"',
          '"Google Sans"',
          "Roboto",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },
      colors: {
        keep: {
          yellow: "#fbbc04",
        },
      },
    },
  },
  plugins: [],
};
