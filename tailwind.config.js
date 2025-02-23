/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      black2: "#232323",
      black: "#161616",
      white: "#f1e1d9",
      brown: "#53423e",
      lightbrown: "#645550",
      darkbrown: "#2c2523",
      cyan: "#15d1e9",
      lightcyan: "#88e5f0",
      darkcyan: "#009fb3",
      orange: "#fb9718",
      lightorange: "#fac27b",
      darkorange: "#d28422",
      grey: "#626965",
      lightgrey: "#978580",
      darkgrey: "#2f4441"
      },
    extend: {
      boxShadow: {
        cyanShadow : "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
      },
    },
    fontFamily:{
      body: ["Josefin sans"],
      special : ["Roboto"],
    }
  },
  plugins: [],
}

