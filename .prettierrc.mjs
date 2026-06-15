/** @type {import("prettier").Config} */
export default {
    plugins: ["prettier-plugin-astro"],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
    // Style preferences
    semi: true,
    singleQuote: false,
    tabWidth: 4,
    trailingComma: "all",
    printWidth: 100,
};
