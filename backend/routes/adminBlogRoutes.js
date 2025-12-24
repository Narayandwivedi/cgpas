const express = require('express');
const router = express.Router();
const {
  getAllBlogsAdmin,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog
} = require('../controller/adminBlogController');

// Get all blogs (including drafts)
router.get('/', getAllBlogsAdmin);

// Get blog by ID
router.get('/:id', getBlogById);

// Create new blog
router.post('/', createBlog);

// Update blog
router.put('/:id', updateBlog);

// Delete blog
router.delete('/:id', deleteBlog);

module.exports = router;
