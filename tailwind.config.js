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
                mono: ["SF Mono", "Fira Code", "sans-serif"],
                sans: ["Calibre", "San Francisco", "SF Pro Text"],
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
        screens: {
            sm: "480px",
            md: "768px",
            lg: "1080px",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
