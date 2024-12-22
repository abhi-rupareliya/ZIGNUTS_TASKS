const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog.controllers');
const fileUploader = require('../middlewares/fileupload');
const adminAuth = require('../middlewares/authorization');

router.post('/', adminAuth,fileUploader, blogController.createBlog);
router.put('/:id', adminAuth, fileUploader, blogController.editBlog);
router.delete('/:id', adminAuth, blogController.deleteBlog);

module.exports = router;
