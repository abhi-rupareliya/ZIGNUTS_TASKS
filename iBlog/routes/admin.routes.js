const express = require('express');
const router = express.Router();
const adminAuth = require('../middlewares/authorization');
const { loginPageReq, hangleLogin, logout, dashboard, getBlogs, addBlogPage, editBlogPage, categoriesPage, editCategoryPage, addCategoryPage, getBlogDetails } = require('../controllers/admin.controllers');

router.get('/', adminAuth, dashboard);
router.get('/login', loginPageReq);
router.post('/login', hangleLogin);
router.get('/logout', logout);
router.get('/blogs', adminAuth, getBlogs);
router.get('/add-blog', adminAuth, addBlogPage);
router.get('/edit-blog/:id', adminAuth, editBlogPage);
router.get('/edit-category/:id', adminAuth, editCategoryPage);
router.get('/categories', adminAuth, categoriesPage);
router.get('/add-category', adminAuth, addCategoryPage);
router.get('/:slug', getBlogDetails);

module.exports = router;
