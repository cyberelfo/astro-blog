import type { CollectionEntry } from "astro:content";

export function slugify(text: string): string {
    if (!text) return "";

    // make lower case and trim
    let slug = text.toLowerCase().trim();

    // remove accents from characters
    slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // replace invalid chars with spaces
    slug = slug.replace(/[^a-z0-9\s-]/g, " ").trim();

    // replace multiple spaces or hyphens with a single hyphen
    slug = slug.replace(/[\s-]+/g, "-");

    return slug;
}

export function formatDate(date: Date | string): string {
    return new Date(date).toLocaleDateString("pt-BR", {
        timeZone: "UTC",
    });
}

interface FormatBlogPostsOptions {
    filterOutDrafts?: boolean;
    filterOutFuturePosts?: boolean;
    sortByDate?: boolean;
    limit?: number;
}

export function formatBlogPosts(
    posts: CollectionEntry<"blog">[],
    {
        filterOutDrafts = true,
        filterOutFuturePosts = true,
        sortByDate = true,
        limit = 0,
    }: FormatBlogPostsOptions = {},
): CollectionEntry<"blog">[] {
    const filteredPosts = posts.reduce<CollectionEntry<"blog">[]>((acc, post) => {
        const { date, draft } = post.data;

        // filter out drafts if true
        if (filterOutDrafts && draft) return acc;

        // filter out future posts if true
        if (filterOutFuturePosts && new Date(date) > new Date()) return acc;

        acc.push(post);
        return acc;
    }, []);

    // sort by date or randomize
    if (sortByDate) {
        filteredPosts.sort(
            (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
        );
    } else {
        filteredPosts.sort(() => Math.random() - 0.5);
    }

    // limit if number is passed
    if (limit > 0) {
        return filteredPosts.slice(0, limit);
    }

    return filteredPosts;
}
