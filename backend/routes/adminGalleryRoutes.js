const express = require('express');
const router = express.Router();
const {
  getAllGalleryAdmin,
  getGalleryById,
  createGallery,
  updateGallery,
  deleteGallery
} = require('../controller/adminGalleryController');

// Get all gallery items (including drafts)
router.get('/', getAllGalleryAdmin);

// Get gallery item by ID
router.get('/:id', getGalleryById);

// Create new gallery item
router.post('/', createGallery);

// Update gallery item
router.put('/:id', updateGallery);

// Delete gallery item
router.delete('/:id', deleteGallery);

module.exports = router;
