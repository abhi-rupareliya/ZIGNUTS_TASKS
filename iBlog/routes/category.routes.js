const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controllers');
const adminAuth = require('../middlewares/authorization');

router.post('/', adminAuth, categoryController.createCategory);
router.put('/:id', adminAuth, categoryController.editCategory);
router.delete('/:id', adminAuth, categoryController.deleteCategory);

module.exports = router;
