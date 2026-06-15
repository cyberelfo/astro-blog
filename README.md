# Café & TV

A static blog showcasing award-winning short animations, built with [Astro](https://astro.build/) and deployed to [Cloudflare Pages](https://pages.cloudflare.com/).

Features: static full-text search (Pagefind), dark/light theme, RSS feed, XML sitemap, dynamic pagination, JSON-LD structured data, and responsive YouTube/Vimeo embeds.

---

## 🚀 Project Structure

```
/
├── public/                   # Static assets served as-is
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/               # Post images
├── src/
│   ├── assets/               # Optimised asset sources (logos, images processed by Astro)
│   ├── components/           # Reusable Astro UI components
│   │   ├── Nav.astro
│   │   ├── PostCard.astro
│   │   ├── PostHeader.astro
│   │   ├── VideoEmbed.astro  # Shared YouTube/Vimeo embed with oEmbed aspect-ratio fetch
│   │   ├── CategoryCloud.astro
│   │   ├── RelatedPosts.astro
│   │   ├── SearchModal.astro # Pagefind-powered full-text search
│   │   ├── Seo.astro         # Open Graph, Twitter Card, and JSON-LD tags
│   │   └── ...
│   ├── content/
│   │   ├── blog/             # Markdown posts (.md) — one file per post
│   │   │   └── _template.md  # Starter template (excluded from build by glob)
│   │   └── content.config.ts # Zod schema for the blog collection
│   ├── data/
│   │   ├── navData.ts        # Navigation items
│   │   └── siteData.json     # Site-wide metadata (title, description, GA ID)
│   ├── layouts/
│   │   ├── MainLayout.astro          # Site shell (nav, footer, GA, search modal)
│   │   ├── MainHead.astro            # <head> with fonts, SEO, and meta tags
│   │   └── EditorialPostLayout.astro # Magazine-style post template
│   ├── lib/
│   │   ├── utils.ts    # slugify, formatDate, formatBlogPosts
│   │   ├── jsonLD.ts   # JSON-LD schema builder (type-safe, XSS-safe)
│   │   └── nav.js      # Client-side navigation script
│   ├── pages/
│   │   ├── [...page].astro          # Paginated home feed
│   │   ├── blog/[...slug].astro     # Individual post pages
│   │   ├── category/[category].astro
│   │   ├── author/[author].astro
│   │   ├── sobre.astro              # About page
│   │   └── rss.xml.js               # RSS feed endpoint
│   └── styles/
│       └── global.css    # Design system tokens and global styles
├── astro.config.mjs      # Astro config, integrations, and remark plugins
├── postcss.config.mjs    # PostCSS (custom-media-queries + nesting-rules)
├── wrangler.jsonc        # Cloudflare Pages deployment config
└── tsconfig.json         # TypeScript config (extends astro/tsconfigs/strict)
```

---

## 🧑‍💻 Development

### Install dependencies

```sh
npm install
```

### Build the search index for local dev

Pagefind indexes compiled HTML, so you must build once before the dev server can serve search results:

```sh
npm run pagefind:dev
```

### Start the dev server

```sh
npm run dev
```

### Build for production

Builds the site with Astro then runs Pagefind to generate the search index inside `dist/`:

```sh
npm run build
```

### Preview the production build locally

```sh
npm run preview
```

### Lint & format

```sh
npm run lint      # ESLint (eslint-plugin-astro + @typescript-eslint/parser)
npm run format    # Prettier (prettier-plugin-astro)
```

---

## 📝 Adding a blog post

Create a new Markdown file in `src/content/blog/`. The frontmatter is validated against the schema in [`src/content/content.config.ts`](src/content/content.config.ts). Copy [`_template.md`](src/content/blog/_template.md) as a starting point.

### Required frontmatter fields

```markdown
---
title: O Retrato de Dorian Gray
description: Análise sobre a animação de Georges Schwizgebel.
date: 2026-06-14
author: Franklin Amorim
category: Animação 2D
image:
  src: "/images/dorian-gray.jpg"
  alt: "Uma cena da animação retratando Dorian Gray."
---
```

### Optional frontmatter fields

| Field | Type | Description |
|---|---|---|
| `youtube` | `string` | YouTube video ID — renders as the post hero embed |
| `vimeo` | `string` | Vimeo video ID — renders as the post hero embed |
| `draft` | `boolean` | Set `true` to exclude from build (default: `false`) |
| `robots` | `string` | e.g. `"noindex, nofollow"` to block crawlers |

### Embedding videos in the post body

Use shortcode syntax anywhere in the Markdown body — the remark plugin converts them to responsive iframes:

```
[youtube:dQw4w9WgXcQ]
[vimeo:123456789]
```

---

## 📦 Key dependencies

| Package | Purpose |
|---|---|
| [Astro](https://astro.build/) v6 | Static site framework |
| [Pagefind](https://pagefind.app/) | Static full-text search |
| [astro-embed](https://www.npmjs.com/package/astro-embed) | Optimised YouTube lite embed |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | Auto-generated XML sitemap |
| [@astrojs/rss](https://docs.astro.build/en/guides/rss/) | RSS feed |
| [astro-icon](https://www.npmjs.com/package/astro-icon) | SVG icon component |
| [postcss-preset-env](https://preset-env.cssdb.org/) | CSS nesting + custom media queries |

---

## ☁️ Deployment (Cloudflare Pages)

The site deploys automatically to **Cloudflare Pages** on every push to `main`.

**Build settings** (configured in the Cloudflare Pages dashboard):

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | 22 |

The [`wrangler.jsonc`](wrangler.jsonc) file configures the Cloudflare project name and serves `dist/` as static assets. The `compatibility_date` should be updated when Cloudflare releases new runtime features you want to adopt.

---

## 📄 License

MIT
