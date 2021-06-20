const colors = require("tailwindcss/colors");
module.exports = {
    mode: "jit",
    purge: [
        "./components/**/*.{vue,js}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                "fira-code": ["Fira Code", "sans-serif"],
            },
            colors: {
                emerald: colors.emerald,
                gray: colors.trueGray,
                cwc: {
                    100: "#000000",
                },
                bgColor: "#112340",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
