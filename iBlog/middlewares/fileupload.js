const multer = require('multer');
const path = require('path');

// Set storage options
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads'); // Folder for storing images
    },
    filename: function (req, file, cb) {
        // Generate unique filename
        cb(null, Date.now() + '-' + file.fieldname + path.extname(file.originalname));
    },
});

// File filter for image validation
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Only images are allowed.'));
    }
};

// Initialize multer with storage and file filter
const upload = multer({ storage, fileFilter });

// Multi-field upload for thumbnail and feature image
const blogImageUpload = upload.fields([
    { name: 'thumbnail', maxCount: 1 },
    { name: 'featureImage', maxCount: 1 },
]);

module.exports = blogImageUpload ;
