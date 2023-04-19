/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      md: "800px",
      lg: "1024px",
      xl: "1504px",
      "2xl": "1920px",
    },
    extend: {
      gridTemplateColumns: {
        15: "repeat(15,minmax(0,1fr))",
      },
      colors: {
        primary: "#4CAF50",
        secondary: "#8BC35A",
        accent: "#CDDC39",
      },
    },
  },
  plugins: [],
};
