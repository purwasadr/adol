const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')
const { spacing } = defaultTheme

module.exports = {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.js",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
                inter: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
        },
    },
 
    plugins: [
        require("@tailwindcss/forms"),
        plugin(function ({ addBase, theme }) {
            addBase({
                [`[type='file']`]: {
                    background: "unset",
                    "border-color": "inherit",
                    "border-width": "0",
                    "border-radius": "0",
                    padding: "0",
                    "font-size": "unset",
                    "line-height": "inherit",
                },
                [`[type='file']:focus`]: {
                    outline: `1px solid ButtonText`,
                    outline: `1px auto inherit`,
                },
                [[`input[type=file]::file-selector-button`]]: {
                    color: "white",
                    background: theme("colors.gray.800", colors.gray[800]),
                    border: 0,
                    "font-weight": theme("fontWeight.medium"),
                    "font-size": theme("fontSize.sm"),
                    cursor: "pointer",
                    "padding-top": spacing[2.5],
                    "padding-bottom": spacing[2.5],
                    "padding-left": spacing[8],
                    "padding-right": spacing[4],
                    "margin-inline-start": "-1rem",
                    "margin-inline-end": "1rem",
                    "&:hover": {
                        background: theme("colors.gray.700", colors.gray[700]),
                    },
                },
                [[`.dark input[type=file]::file-selector-button`]]: {
                    color: "white",
                    background: theme("colors.gray.600", colors.gray[600]),
                    "&:hover": {
                        background: theme("colors.gray.500", colors.gray[500]),
                    },
                },
            });
        }),
    ],
};
