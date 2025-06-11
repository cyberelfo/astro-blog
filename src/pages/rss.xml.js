import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
        // stylesheet: '/rss/styles.xsl',
        title: 'Café & TV',
        description: 'Assista as melhores animações do mundo e mergulhe em um mundo de surpresas e aventuras!',
        site: context.site,
        items: await pagesGlobToRssItems(
            import.meta.glob('./blog/*.{md,mdx}'),
        ),
    });
}