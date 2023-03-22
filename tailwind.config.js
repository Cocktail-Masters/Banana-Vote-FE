/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "320px", // => @media (min-width: 320px) { ... }
      md: "768px",
      lg: "960px",
      xl: "1200px",
      "2xl": "1536px",
    },
    extend: {},
    fontFamily: {
      sans: ["noto-sans"],
    },
  },
  plugins: [],
};
