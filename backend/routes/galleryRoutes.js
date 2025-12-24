const express = require('express');
const router = express.Router();
const {
  getAllGallery,
  getGalleryById
} = require('../controller/galleryController');

// Get all published gallery items
router.get('/', getAllGallery);

// Get gallery item by ID
router.get('/:id', getGalleryById);

module.exports = router;
