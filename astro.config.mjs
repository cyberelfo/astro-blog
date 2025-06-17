// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: 'https://www.cafeetv.com.br',
    integrations: [icon(), sitemap()],
    i18n: {
        locales: ["pt-br"],
        defaultLocale: "pt-br",
    }
});