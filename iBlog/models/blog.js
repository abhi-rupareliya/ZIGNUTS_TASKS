const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, unique: true , required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    description: { type: String, required: true },
    publishDate: { type: Date, default: Date.now },
    thumbnail: { type: String },
    featureImage: { type: String },
});

module.exports = mongoose.model('Blog', blogSchema);
