const Blog = require('../models/blog');

async function getBlogs(req, res) {
    const page = parseInt(req.query.page) || 1;
    const limit = 5;
    const searchQuery = req.query.search;

    const query = searchQuery
        ? { title: { $regex: searchQuery, $options: 'i' } }
        : {};

    // Total no. of blogs matching the query
    const totalBlogs = await Blog.countDocuments(query);
    const blogs = await Blog.find(query)
        .populate('category')
        .sort({ publishDate: -1 })
        .skip((page - 1) * limit)
        .limit(limit);

    const totalPages = Math.ceil(totalBlogs / limit);

    res.render('user/blogs', {
        blogs,
        currentPage: page,
        totalPages,
        searchQuery,
    });
}


async function getBlog(req, res) {
    const blog = await Blog.findOne({ slug: req.params.slug }).populate('category');
    res.render('user/blog', { blog });
}

module.exports = {
    getBlogs,
    getBlog
};