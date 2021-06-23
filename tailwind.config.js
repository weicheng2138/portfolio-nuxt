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
                bgColor: "#0a1930",
                bcColor: "#64ffda",
                bcColorTitle: "#ccd6f6",
                bcColorText: "#8892b0",
            },
        },
        height: {
            navHeight: "100px",
        },
        maxWidth: {
            heroP: "500px",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
