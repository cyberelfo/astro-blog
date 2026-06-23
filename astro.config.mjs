// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// Custom Remark plugin to convert [youtube:ID] and [vimeo:ID] into responsive iframes
function remarkVideoEmbeds() {
    return (tree) => {
        function walk(node) {
            if (node.children) {
                const newChildren = [];
                for (const child of node.children) {
                    if (child.type === 'text') {
                        const regex = /\[(youtube|vimeo):([a-zA-Z0-9_-]+)\]/g;
                        let lastIndex = 0;
                        let match;
                        let textValue = child.value;
                        let hasMatch = false;
                        
                        while ((match = regex.exec(textValue)) !== null) {
                            hasMatch = true;
                            const before = textValue.substring(lastIndex, match.index);
                            if (before) {
                                newChildren.push({ type: 'text', value: before });
                            }
                            
                            const type = match[1];
                            const id = match[2];
                            let htmlValue = '';
                            if (type === 'youtube') {
                                htmlValue = `<div class="video-container"><iframe class="responsive-video" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`;
                            } else {
                                htmlValue = `<div class="video-container"><iframe class="responsive-video" src="https://player.vimeo.com/video/${id}?color=f0603f&title=0&byline=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`;
                            }
                            newChildren.push({ type: 'html', value: htmlValue });
                            lastIndex = regex.lastIndex;
                        }
                        
                        if (hasMatch) {
                            const after = textValue.substring(lastIndex);
                            if (after) {
                                newChildren.push({ type: 'text', value: after });
                            }
                        } else {
                            newChildren.push(child);
                        }
                    } else {
                        walk(child);
                        newChildren.push(child);
                    }
                }
                node.children = newChildren;
            }
        }
        walk(tree);
    };
}

// Custom Rehype plugin to open external links in a new window
function rehypeExternalLinks() {
    return (tree) => {
        function walk(node) {
            if (node.type === 'element' && node.tagName === 'a') {
                const href = node.properties?.href;
                if (typeof href === 'string' && (href.startsWith('http://') || href.startsWith('https://'))) {
                    node.properties = node.properties || {};
                    node.properties.target = '_blank';
                    node.properties.rel = 'noopener noreferrer';
                }
            }
            if (node.children) {
                for (const child of node.children) {
                    walk(child);
                }
            }
        }
        walk(tree);
    };
}

// https://astro.build/config
export default defineConfig({
    site: 'https://www.cafeetv.com.br',
    integrations: [icon(), sitemap()],
    markdown: {
        remarkPlugins: [remarkVideoEmbeds],
        rehypePlugins: [rehypeExternalLinks],
    },
    i18n: {
        locales: ["pt-br"],
        defaultLocale: "pt-br",
    }
});