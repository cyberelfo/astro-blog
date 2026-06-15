import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default tseslint.config(
    // Astro files — use eslint-plugin-astro recommended rules only
    ...eslintPluginAstro.configs.recommended,

    // TypeScript / JS files — strict TS rules scoped to .ts and .js only
    {
        files: ["src/**/*.{ts,js,mjs}"],
        extends: [...tseslint.configs.recommended],
    },

    // Global ignores
    {
        ignores: ["dist/", "node_modules/", ".astro/", "public/pagefind/"],
    },
);
