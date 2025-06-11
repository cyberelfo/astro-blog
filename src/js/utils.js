export function slugify(text) {
    if (!text)
        return '';

    // make lower case and trim
    var slug = text.toLowerCase().trim();

    // remove accents from charaters
    slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

    // replace invalid chars with spaces
    slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();

    // replace multiple spaces or hyphens with a single hyphen
    slug = slug.replace(/[\s-]+/g, '-');

    return slug;
}

export function formatDate(date) {
    return new Date(date).toLocaleDateString("pt-BR", {
        timeZone: "UTC",
    });
}

export function formatBlogPosts(posts, {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = 0,
} = {}) {
    const filteredPosts = posts.reduce((acc, post) => {
        const { date, draft } = post.frontmatter;
        // filter out draft if true
        if (filterOutDrafts && draft) return acc;

        // filterOutFuturePosts if true
        if (filterOutFuturePosts && new Date(date) > new Date()) return acc;

        // add post to acc
        acc.push(post);

        return acc;

    }, [])

    // sort by date or randomize
    if (sortByDate) {
        filteredPosts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
    } else {
        filteredPosts.sort(() => Math.random() - 0.5);
    }

    // limit if number is passed
    if (limit > 0) {
        return filteredPosts.slice(0, limit);
    }

    return filteredPosts;
}