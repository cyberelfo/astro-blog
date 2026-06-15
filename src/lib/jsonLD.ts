import type { CollectionEntry } from "astro:content";
import siteData from "../data/siteData.json";
import { slugify } from "./utils";

interface JsonLDPost {
    post: CollectionEntry<"blog">["data"];
    type: "post";
    url: URL | string;
}

interface JsonLDWebsite {
    type: "website";
    url: URL | string;
    post?: undefined;
}

type JsonLDOptions = JsonLDPost | JsonLDWebsite;

export default function jsonLDGenerator({ type, post, url }: JsonLDOptions): string {
    if (type === "post" && post) {
        return `<script type="application/ld+json">
${JSON.stringify(
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": String(url),
        },
        headline: post.title,
        description: post.description,
        image: post.image.src,
        author: {
            "@type": "Person",
            name: post.author,
            url: `/author/${slugify(post.author)}`,
        },
        datePublished: post.date,
    },
    null,
    2,
)}
</script>`;
    }

    return `<script type="application/ld+json">
${JSON.stringify(
    {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        name: siteData.title,
        url: import.meta.env.SITE,
    },
    null,
    2,
)}
</script>`;
}
