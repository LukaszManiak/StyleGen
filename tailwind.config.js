/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#060909",
        background: "#f9fbfb",
        primary: "#5eacb5",
        secondary: "#a3d8dc",
        accent: "#6ac8d2",
      },
    },
  },
  plugins: [],
};
