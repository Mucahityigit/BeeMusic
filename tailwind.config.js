/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#101C35",
        passiveColor: "#B3B3B3",
        activeColor: "#ffffff",
        bgLinearFirst: "#f1c40f",
        bgLinearSecond: "#d35400",
      },
      backgroundImage: {
        bgImage: "url('./src/assets/background1.png')",
      },
    },
  },
  plugins: [],
};
