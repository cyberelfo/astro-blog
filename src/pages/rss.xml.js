import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
        // stylesheet: '/rss/styles.xsl',
        title: 'Astro Blog',
        description: 'My Astro Blog',
        site: context.site,
        items: await pagesGlobToRssItems(
            import.meta.glob('./blog/*.{md,mdx}'),
        ),
    });
}