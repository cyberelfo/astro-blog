# My Astro Blog

A minimal, modern blog built with [Astro](https://astro.build/). This project features posts with Markdown, author pages, categories, related posts, and YouTube video embeds.

## ✨ Features

- Blog posts written in Markdown (`src/pages/blog/*.md`)
- Author and category pages
- Responsive layout with custom CSS
- Related posts and category cloud
- YouTube video embeds in posts
- SEO and RSS feed support
- Sitemap generation
- Local full-text search with Pagefind (Portuguese pt-br localized)

## 🚀 Project Structure

```
/
├── public/
│   └── images/           # Static images
├── src/
│   ├── components/       # Astro components (PostHeader, RelatedPosts, etc.)
│   ├── layouts/          # Layouts for pages and posts
│   ├── pages/            # Pages and blog posts (Markdown and Astro)
│   │   ├── blog/         # Blog posts in Markdown
│   │   ├── author/       # Author pages
│   │   ├── category/     # Category pages
│   │   └── ...           # Other pages (about, index, etc.)
│   ├── styles/           # Global CSS
│   ├── Data/             # Site metadata
│   └── js/               # Utility JS functions
├── package.json
└── astro.config.mjs
```

## 🧑‍💻 Usage

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Build search index for local development (run once if testing search functionality locally):

```sh
npm run pagefind:dev
```

Build for production (automatically runs Pagefind):

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## 📝 Adding a Blog Post

Add a new Markdown file to `src/pages/blog/` with frontmatter like:

```markdown
---
title: My New Post
date: 2025-06-11
author: Franklin Amorim
category: Astro
youtube: If3wzG43PD8
image: { src: "/images/my-image.jpg", alt: "Description" }
description: Short summary of the post
---

Your post content here.
```

## 📦 Main Dependencies

- [Astro](https://astro.build/)
- [astro-embed](https://www.npmjs.com/package/astro-embed) (YouTube, etc.)
- [@astrojs/rss](https://docs.astro.build/en/guides/rss/)
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [astro-icon](https://www.npmjs.com/package/astro-icon)
- [Pagefind](https://pagefind.app/) (local, static full-text search)

## 🌐 Site Metadata

Edit `src/Data/siteData.json` to update the site title, description, and default image.

## 📄 License

MIT
