/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        amiri: ["Amiri", "serif"],
        "droid-arabic-kufi": ["Droid Arabic Kufi", "sans-serif"],
        "droid-arabic-naskh": ["Droid Arabic Naskh", "serif"],
        lateef: ["Lateef", "serif"],
        scheherazade: ["Scheherazade", "serif"],
        thabit: ["Thabit", "monospace"],
      },
      colors: {
        primary: "#05a59f",
        hover: "#075350d1",
      },
      zIndex: {
        999: "999",
      },
      width: {
        "58rem": "58rem", // Custom width of 58rem
      },
    },
  },
  plugins: [],
};
