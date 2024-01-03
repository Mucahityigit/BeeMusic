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
        bgCard: "#0F2234",
      },
      backgroundImage: {
        bgImage: "url('./src/assets/background1.png')",
        bgGradient:
          "linear-gradient(130deg, rgba(255,255,255,0.4),rgba(255,255,255,0.3),rgba(255,255,255,0.2),rgba(255,255,255,0.1) ,rgba(255,255,255,0.01))",
        bgSideLeftGradient:
          "linear-gradient(90deg, rgba(16,28,53,0.969625350140056) 15%, rgba(16,28,53,0.8995973389355743) 36%, rgba(16,28,53,0.7763480392156863) 55%, rgba(16,28,53,0.47102591036414565) 80%, rgba(16,28,53,0.26934523809523814) 90%, rgba(16,28,53,0) 100%)",
        bgSideRightGradient:
          "linear-gradient(270deg, rgba(16,28,53,0.969625350140056) 15%, rgba(16,28,53,0.8995973389355743) 36%, rgba(16,28,53,0.7763480392156863) 55%, rgba(16,28,53,0.47102591036414565) 80%, rgba(16,28,53,0.26934523809523814) 90%, rgba(16,28,53,0) 100%)",
      },
      fontFamily: {
        Kanit: "Kanit",
      },
      screens: {
        xs: "320px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
