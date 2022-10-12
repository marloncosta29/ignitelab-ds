/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      white: "#FFF",
      black: "#000000",
      gray: {
        900: "#121214",
        800: "#202024",
        400: "#7C7C*A",
        200: "#C4C4CC",
        100: "#E1E1E6",
      },
      cyan: {
        500: "#81D8F7",
        300: "#BBEDFF",
      },
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
