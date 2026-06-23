import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import siteData from '../data/siteData.json';
import { formatBlogPosts } from '../lib/utils';

export async function GET(context) {
    const allPosts = await getCollection('blog');
    const publishedPosts = formatBlogPosts(allPosts);
    return rss({
        title: siteData.title,
        description: siteData.description,
        site: context.site,
        customData: '<language>pt-br</language>',
        items: publishedPosts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description,
            link: `/blog/${post.id}/`,
        })),
    });
}