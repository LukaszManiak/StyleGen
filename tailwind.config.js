/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#020d0d",
        background: "#eefbfc",
        primary: "#29bddb",
        secondary: "#8281ea",
        accent: "#7c51e1",
      },
      boxShadow: {
        customShadow: "0px 5px 0px 0px rgba(2, 13, 13, 1);",
      },
    },
  },
  plugins: [],
};
