const Category = require('../models/category');

async function createCategory(req, res) {
    const { name } = req.body;
    const category = await Category.findOne({
        name
    });
    if (category) {
        return res.status(400).send('Category already exists');
    }
    const newCategory = new Category({ name });
    await newCategory.save();
    res.redirect('/admin/categories');
}

async function editCategory(req, res) {
    const { name } = req.body;
    await Category.findByIdAndUpdate(req.params.id, { name });
    res.redirect('/admin/categories');
}

async function deleteCategory(req, res) {
    await Category.findByIdAndDelete(req.params.id);
    res.redirect('/admin/categories');
}

module.exports = {
    createCategory,
    editCategory,
    deleteCategory
};
