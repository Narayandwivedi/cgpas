const express = require('express');
const router = express.Router();
const {
  getAllNews,
  searchNews,
  getNewsByType,
  getNewsBySlug
} = require('../controller/newsController');

// Get all published news (with search and filter)
router.get('/published', searchNews);

// Get all news (alternative route)
router.get('/', getAllNews);

// Get news by type (cg, national, international)
router.get('/type/:type', getNewsByType);

// Get news by slug
router.get('/:slug', getNewsBySlug);

module.exports = router;
