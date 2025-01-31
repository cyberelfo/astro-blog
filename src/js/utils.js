export function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w-]+/g, "") // Remove all non-word chars
        .replace(/--+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text}
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