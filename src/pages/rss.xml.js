import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import siteData from '../data/siteData.json';

export async function GET(context) {
    const blog = await getCollection('blog');
    return rss({
        title: siteData.title,
        description: siteData.description,
        site: context.site,
        customData: '<language>pt-br</language>',
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description,
            link: `/blog/${post.id}/`,
        })),
    });
}