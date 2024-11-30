/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        luxury: "#DDD06A",
        dark: "#1B1B1B",
        light: "#F8F8FF",
      },
    },
  },
  plugins: [],
};
