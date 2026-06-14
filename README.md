# Café & TV - Astro Blog

A modern, fast, and feature-rich blog built with [Astro](https://astro.build/) showcasing award-winning short animations. It features static full-text search, dark/light theme support, RSS/Sitemap integration, dynamic pagination, and rich video embedding options.

---

## ✨ Features

- **Astro Content Collections:** Blog posts managed as a structured content collection (`src/content/blog/`) with strong schema validation.
- **Local Static Search:** Dynamic full-text search powered by **Pagefind** inside a custom-styled, glassmorphic modal dialog with Portuguese (`pt-br`) localization and client-side lazy-loading.
- **Dynamic Routing:** Dynamically generated paths for posts (`src/pages/blog/[...slug].astro`), categories (`src/pages/category/[category].astro`), and authors (`src/pages/author/[author].astro`).
- **Flexible Layouts:** Choose between `BlogPostLayout` (classic review layout) and `EditorialPostLayout` (magazine-style layout with featured headers and custom font styles).
- **Responsive Embeds:** Native support for YouTube and Vimeo video embeds in both post headers and inline content using responsive wrappers.
- **Dark/Light Theme:** Fully responsive color themes that automatically adapt to system settings or user choice, including smooth transition animations.
- **SEO & Structured Metadata:** Semantic HTML tags, RSS feed generator (`src/pages/rss.xml.js`), automated XML Sitemap generation, and JSON-LD schema support (`src/js/jsonLD.js`) for optimized search engine indexing.

---

## 🚀 Project Structure

```
/
├── public/                 # Static assets copied directly to the build root
│   ├── favicon-96x96.png
│   ├── favicon.svg
│   └── site.webmanifest
├── src/
│   ├── assets/             # Optimized asset sources (logos, images)
│   ├── components/         # Reusable Astro UI components
│   │   ├── Nav.astro       # Header navigation bar with theme and search toggles
│   │   ├── SearchModal.astro # Glassmorphic dialog modal and Pagefind UI logic
│   │   └── ...             # Cards, Pagination, Seo, CategoryCloud components
│   ├── content/            # Astro Content Collections directory
│   │   ├── blog/           # Blog posts in Markdown format (.md)
│   │   └── config.ts       # Content schema definitions using Zod
│   ├── Data/               # Navigation menus and site-wide metadata
│   │   ├── navData.js
│   │   └── siteData.json
│   ├── Icons/              # Custom static SVG icons (logo.svg)
│   ├── js/                 # Client scripts and utility helper scripts
│   │   ├── utils.js        # Formatting dates, slugification, and layout utils
│   │   └── jsonLD.js       # Structured JSON-LD schema builder for posts
│   ├── layouts/            # Page templates and wrapper layouts
│   │   ├── MainLayout.astro # Site-wide template wrapping all pages
│   │   ├── BlogPostLayout.astro # Standard template for post reviews
│   │   └── EditorialPostLayout.astro # Specialized template for editorial posts
│   ├── pages/              # File-based routing and API endpoints
│   │   ├── [...page].astro # Paginated home feed pages
│   │   ├── sobre.astro     # Static About page
│   │   ├── RSS.xml.js      # Dynamically generated RSS feed endpoint
│   │   ├── blog/           # dynamic post slug routes
│   │   ├── category/       # category page routes
│   │   └── author/         # author bio page routes
│   └── styles/             # Modular CSS styles
│       └── global.css      # Core stylesheet and Design System tokens
├── package.json            # Scripts, devDependencies, and project configurations
├── astro.config.mjs        # Astro configuration, integrations, and remark plugins
└── tsconfig.json           # TypeScript configuration
```

---

## 🧑‍💻 Usage

### Install Dependencies:

```sh
npm install
```

### Build Search Index for Local Development:
Since Pagefind indexes compiled HTML, you must build the site once locally to generate a search index that the local development server can read:

```sh
npm run pagefind:dev
```

### Start the Development Server:

```sh
npm run dev
```

### Build for Production:
Builds the entire site using Astro and runs Pagefind automatically to compile the production index inside the `dist/` directory:

```sh
npm run build
```

### Preview the Production Build:

```sh
npm run preview
```

---

## 📝 Adding a Blog Post

Add a new Markdown file to `src/content/blog/`. The file's frontmatter is validated against the schema defined in `src/content.config.ts`.

### Markdown Frontmatter Example:

```markdown
---
title: O Retrato de Dorian Gray
description: Análise sobre a deslumbrante animação de Georges Schwizgebel adaptando a obra clássica.
date: 2026-06-14
author: Franklin Amorim
category: Animação 2D
image:
  src: "/src/assets/images/dorian-gray.jpg"
  alt: "Uma cena colorida da animação retratando Dorian Gray."
draft: false                            # Opcional (padrão: false)
youtube: If3wzG43PD8                   # Opcional (ID para cabeçalho do post)
vimeo: 12345678                        # Opcional (ID para cabeçalho do post)
layout: "../../layouts/BlogPostLayout.astro" # Define o layout do post
---

O conteúdo do seu post vai aqui em Markdown.

### Embutindo vídeos no corpo do post:
Além dos vídeos de cabeçalho, você pode utilizar shortcodes customizados no corpo do Markdown que serão automaticamente convertidos em iframes responsivos:

[youtube:If3wzG43PD8]
[vimeo:12345678]
```

---

## 📦 Main Dependencies & Integrations

- **[Astro](https://astro.build/) (v6.0+)** - Static site framework
- **[astro-icon](https://www.npmjs.com/package/astro-icon)** - Custom icon helper integration
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** - Automated sitemap builder
- **[astro-embed](https://www.npmjs.com/package/astro-embed)** - Rich video embedding helper
- **[Pagefind](https://pagefind.app/)** - Zero-config, static client-side search engine
- **[PostCSS](https://postcss.org/) & [postcss-preset-env](https://preset-env.cssdb.org/)** - Modern CSS processing and custom media query support

---

## 📄 License

MIT
