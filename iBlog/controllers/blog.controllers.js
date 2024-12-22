const Blog = require("../models/blog");
const fs = require("fs");
const path = require("path");

async function createBlog(req, res) {
  try {
    const { title, category, content } = req.body;
    const { thumbnail, featureImage } = req.files;

    if (!thumbnail || !thumbnail[0]) {
      return res.status(400).send("Thumbnail image is required.");
    }
    if (!featureImage || !featureImage[0]) {
      return res.status(400).send("Feature image is required.");
    }

    // Generate a unique slug
    const generateSlug = async (title) => {
      let slug = title.toLowerCase().replace(/[^a-z0-9-]/g, "-"); // Convert to lowercase and replace special chars with `-`
      let originalSlug = slug;
      let counter = 1;

      // Handle duplicates
      while (await Blog.exists({ slug })) {
        slug = `${originalSlug}-${counter}`;
        counter++;
      }

      return slug;
    };

    const newBlog = new Blog({
      title: title,
      category: category,
      description: content,
      thumbnail: `/uploads/${thumbnail[0].filename}`, // thumbnail path
      featureImage: `/uploads/${featureImage[0].filename}`, // feature image path
      slug: await generateSlug(title),
      publishDate: Date.now(),
    });

    await newBlog.save();
    res.redirect("/admin/blogs");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

async function editBlog(req, res) {
  try {
    let blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).send("Blog not found");
    }

    // Update blog fields
    blog.title = req.body.title || blog.title;
    blog.category = req.body.category || blog.category;
    blog.description = req.body.content || blog.description;

    // Handle thumbnail update
    if (req.files?.thumbnail) {
      const thumbnailPath = path.join(
        __dirname,
        "..",
        "public",
        blog.thumbnail
      );

      // Delete old thumbnail if it exists
      if (blog.thumbnail && fs.existsSync(thumbnailPath)) {
        fs.unlinkSync(thumbnailPath);
      }

      blog.thumbnail = `/uploads/${req.files.thumbnail[0].filename}`;
    }

    // Handle feature image update
    if (req.files?.featureImage) {
      const featureImagePath = path.join(
        __dirname,
        "..",
        "public",
        blog.featureImage
      );

      // Delete old feature image if it exists
      if (blog.featureImage && fs.existsSync(featureImagePath)) {
        fs.unlinkSync(featureImagePath);
      }

      blog.featureImage = `/uploads/${req.files.featureImage[0].filename}`;
    }

    await blog.save();

    // Populate category for rendering the updated blog
    blog = await Blog.findById(req.params.id).populate("category");

    res.render("admin/main", { main: "layouts/blog", blog });
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function deleteBlog(req, res) {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).send("Blog not found");
    }

    // Delete the thumbnail and feature image files if they exist
    if (blog.thumbnail) {
      const thumbnailPath = path.join(__dirname, "..", blog.thumbnail);
      if (fs.existsSync(thumbnailPath)) {
        fs.unlinkSync(thumbnailPath);
      }
    }

    if (blog.featureImage) {
      const featureImagePath = path.join(__dirname, "..", blog.featureImage);
      if (fs.existsSync(featureImagePath)) {
        fs.unlinkSync(featureImagePath);
      }
    }

    await Blog.findByIdAndDelete(req.params.id);
    
    res.redirect("/admin/blogs");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
}

module.exports = {
  createBlog,
  editBlog,
  deleteBlog,
};
