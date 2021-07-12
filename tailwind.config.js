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
                sans: ["Calibri", "San Francisco", "SF Pro Text"],
            },
            fontSize: {
                bcXxs: "12px",
                bcXs: "13px",
                bcSm: "14px",
                bcMd: "16px",
                bcLg: "18px",
                bcXl: "20px",
                bcXxl: "22px",
                bdHeading: "32px",
            },
            spacing: {
                bcTabMR: "5px",
                bcTabP: "10px",
                bcTouchButton: "50px",
                bcNavHeight: "100px",
                bcNavScrollHeight: "70px",
            },
            colors: {
                emerald: colors.emerald,
                gray: colors.trueGray,
                cwc: {
                    100: "#000000",
                },
                bgColor: "#0a192f",
                bcColor: "#64ffda",
                bcColorTitle: "#ccd6f6",
                bcColorText: "#8892b0",
                bcDarkNavy: "#020c1b",
                bcLightNavy: "#112240",
                bcLightestNavy: "#233554",
                bcNavyShadow: "rgba(2, 12, 27, 0.7)",
                bcDarkSlate: "#495670",
                bcSlate: "#8892b0",
                bcLightSlate: "#a8b2d1",
                bcLightestSlate: "#ccd6f6",
                bcWhite: "#e6f1ff;",
                bcColorTint: "rgba(100, 255, 218, 0.1)",
            },
            borderRadius: {
                bcBorderRadius: "4px",
            },
            height: {
                bcNavHeight: "100px",
                bcNavScrollHeight: "70px",
                bcTabHeight: "42px",
                bcHamburgerLineHeight: "2px",
            },
            width: {
                bcTabWidth: "120px",
                bcHamburgerWidth: "30px",
            },
            transitionTimingFunction: {
                bcEasing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
            },
            transitionDuration: {
                250: "250ms",
            },
            outline: {
                bcStyle: ["2px dashed #64ffda", "3px"],
            },
            inset: {
                sideLg: "40px",
                sideMd: "20px",
            },
            boxShadow: {
                appbar: "0 10px 30px -10px rgba(2, 12, 27, 0.7)",
            },
            maxWidth: {
                "900": "900px",
            },
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
    plugins: [require("@tailwindcss/aspect-ratio")],
};
