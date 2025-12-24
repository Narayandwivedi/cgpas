const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  searchBlogs,
  getBlogBySlug,
  getCategories
} = require('../controller/blogController');

// Get all published blogs
router.get('/published', searchBlogs);

// Get all blogs (alternative route)
router.get('/', getAllBlogs);

// Get blog categories
router.get('/categories', getCategories);

// Get blog by slug
router.get('/:slug', getBlogBySlug);

module.exports = router;
