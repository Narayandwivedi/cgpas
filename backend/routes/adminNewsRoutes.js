const express = require('express');
const router = express.Router();
const {
  getAllNewsAdmin,
  getNewsById,
  createNews,
  updateNews,
  deleteNews
} = require('../controller/adminNewsController');

// Get all news (including drafts)
router.get('/', getAllNewsAdmin);

// Get news by ID
router.get('/:id', getNewsById);

// Create new news
router.post('/', createNews);

// Update news
router.put('/:id', updateNews);

// Delete news
router.delete('/:id', deleteNews);

module.exports = router;
