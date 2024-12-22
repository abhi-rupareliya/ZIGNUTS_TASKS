const categoryController = require('../controllers/category.controllers');
const Category = require('../models/category');
const Blog = require('../models/blog');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


async function loginPageReq(req, res) { res.render('admin/login'); }

async function hangleLogin(req, res) {
    const { email, password } = req.body;

    const admin = await User.findOne({ email });
    if (!admin) return res.status(401).send('Invalid Credentials');

    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) return res.status(401).send('Invalid Credentials');

    const token = jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: '5d' });
    res.cookie('authToken', token, {
        httpOnly: true,
        secure: false,
        maxAge: 3600000 * 24 * 5
    });
    console.log(token, req.cookies);
    res.redirect('/admin');
}

function logout(req, res) {
    res.clearCookie('authToken');
    res.redirect('/admin/login');
}

function dashboard(req, res) { res.render('admin/main', { main: 'layouts/home' }) }

async function getBlogs(req, res) {
    const blogs = await Blog.find().populate('category');
    res.render('admin/main', { main: 'layouts/blogs', blogs });
}

async function getBlogDetails(req, res) {
    const blog = await Blog.findOne({ slug: req.params.slug }).populate('category');
    res.render('admin/main', { main: 'layouts/blog', blog });
}

async function addBlogPage(req, res) {
    const categories = await Category.find();
    res.render('admin/main', { main: 'layouts/add-blog', categories });
}

async function editBlogPage(req, res) {
    const blog = await Blog.findById(req.params.id);
    const categories = await Category.find();
    res.render('admin/main', { main: 'layouts/edit-blog', blog, categories });
}

async function categoriesPage(req, res) {
    const categories = await Category.find();
    res.render('admin/main', { main: 'layouts/categories', categories });
}

function addCategoryPage(req, res) {
    res.render('admin/main', { main: 'layouts/add-category' });
}

async function editCategoryPage(req, res) {
    const category = await Category.findById(req.params.id);
    res.render('admin/main', { main: 'layouts/edit-category', category });
}


module.exports = {
    loginPageReq,
    hangleLogin,
    logout,
    dashboard,
    getBlogs,
    getBlogDetails,
    addBlogPage,
    editBlogPage,
    categoriesPage,
    addCategoryPage,
    editCategoryPage
}