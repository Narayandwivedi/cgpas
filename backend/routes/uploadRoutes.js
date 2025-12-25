const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const {
  uploadBlogFeaturedImage,
  uploadGalleryImage,
  uploadExecutiveBodyPhoto,
  deleteImage
} = require('../controller/uploadController');

// Upload blog featured image
router.post('/blog-featured', upload.single('image'), uploadBlogFeaturedImage);

// Upload gallery image
router.post('/gallery', upload.single('image'), uploadGalleryImage);

// Upload executive body photo
router.post('/executive', upload.single('image'), uploadExecutiveBodyPhoto);

// Delete image
router.delete('/delete', deleteImage);

module.exports = router;
