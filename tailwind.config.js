/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
    extend: {
      colors: {
        "terriary-mint": "#AEE6E3",
        "primary-yellow": "#FCDA76",
        "secondary-orange": "#FFA45B",
        "secondary-dark-orange": "#ff821f",
        tertiary: "#F9F6ED",
        bg: {
          normal: {
            dark: "#18191A",
            DEFAULT: "#F1F5F9",
          },
          feed: {
            dark: "#242526",
            DEFAULT: "#ffffff",
          },
          button: {
            dark: "#3A3B3C",
            DEFAULT: "#ffffff",
          },
        },
        text: {
          normal: {
            dark: "#dfdddf",
            DEFAULT: "#000000",
          },
          title: {
            dark: "#dfdddf",
            DEFAULT: "#dfdfaa",
          },
          button: {
            dark: "#E4E6EB",
            DEFAULT: "#000000",
          },
          feed: {
            dark: "#D0D2D6",
            DEFAULT: "#000000",
          },
          article: {
            dark: "#d1d3d8",
            DEFAULT: "#000000",
          },
        },
        border: {
          dark: "#353637",
          DEFAULT: "#E5E7EB",
        },
      },
    },
    fontFamily: {
      sans: ["Pretendard", "noto-sans"],
    },
  },
  plugins: [],
};
