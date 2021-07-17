const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Gilroy", ...defaultTheme.fontFamily.sans],
                heading: ["Avenir"],
            },
            colors: {
                teal: colors.teal,
                cyan: colors.cyan,
            },
            height: {
                192: "48rem",
                144: "36rem",
                120: "30rem",
            },
            width: {
                192: "48rem",
                144: "36rem",
                120: "30rem",
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
    ],
};
