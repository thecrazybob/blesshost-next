const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      fontFamily: {
        sans: ["Gilroy", ...defaultTheme.fontFamily.sans],
        heading: ["Avenir"],
      },
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        blesshost: {
          blue: "#3e83f8",
          darkblue: "#2a3e53",
        },
      },
      height: {
        "[screen-wh]": "calc(100vh - 112px)",
        192: "48rem",
        144: "36rem",
        120: "30rem",
      },
      width: {
        192: "48rem",
        144: "36rem",
        120: "30rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        "gradient-conic-t": "conic-gradient(at top, var(--tw-gradient-stops))",
        "gradient-conic-r":
          "conic-gradient(at right, var(--tw-gradient-stops))",
        "gradient-conic-b":
          "conic-gradient(at bottom, var(--tw-gradient-stops))",
        "gradient-conic-l": "conic-gradient(at left, var(--tw-gradient-stops))",
        "gradient-conic-tr":
          "conic-gradient(at top right, var(--tw-gradient-stops))",
        "gradient-conic-tl":
          "conic-gradient(at top left, var(--tw-gradient-stops))",
        "gradient-conic-br":
          "conic-gradient(at bottom right, var(--tw-gradient-stops))",
        "gradient-conic-bl":
          "conic-gradient(at bottom left, var(--tw-gradient-stops))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
