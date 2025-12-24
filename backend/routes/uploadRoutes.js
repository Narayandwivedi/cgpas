const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const {
  uploadBlogFeaturedImage,
  uploadGalleryImage,
  deleteImage
} = require('../controller/uploadController');

// Upload blog featured image
router.post('/blog-featured', upload.single('image'), uploadBlogFeaturedImage);

// Upload gallery image
router.post('/gallery', upload.single('image'), uploadGalleryImage);

// Delete image
router.delete('/delete', deleteImage);

module.exports = router;
