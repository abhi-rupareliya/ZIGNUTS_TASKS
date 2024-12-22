const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');

router.get('/', userController.getBlogs);
router.get('/:slug', userController.getBlog);

module.exports = router;