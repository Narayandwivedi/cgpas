const News = require('../models/News');

// Admin: Get all news (including drafts)
const getAllNewsAdmin = async (req, res) => {
  try {
    const news = await News.find()
      .sort({ createdAt: -1 })
      .select('-__v');

    res.status(200).json({
      success: true,
      count: news.length,
      news
    });
  } catch (error) {
    console.error('Error fetching all news:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching news',
      error: error.message
    });
  }
};

// Admin: Get news by ID
const getNewsById = async (req, res) => {
  try {
    const { id } = req.params;

    const news = await News.findById(id);

    if (!news) {
      return res.status(404).json({
        success: false,
        message: 'News not found'
      });
    }

    res.status(200).json({
      success: true,
      news
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching news',
      error: error.message
    });
  }
};

// Admin: Create new news
const createNews = async (req, res) => {
  try {
    const newsData = req.body;

    // Generate slug from title if not provided
    if (!newsData.slug) {
      newsData.slug = newsData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    }

    const news = new News(newsData);
    await news.save();

    res.status(201).json({
      success: true,
      message: 'News created successfully',
      news
    });
  } catch (error) {
    console.error('Error creating news:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating news',
      error: error.message
    });
  }
};

// Admin: Update news
const updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // If title is changed, regenerate slug
    if (updateData.title && !updateData.slug) {
      updateData.slug = updateData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    }

    const news = await News.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!news) {
      return res.status(404).json({
        success: false,
        message: 'News not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'News updated successfully',
      news
    });
  } catch (error) {
    console.error('Error updating news:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating news',
      error: error.message
    });
  }
};

// Admin: Delete news
const deleteNews = async (req, res) => {
  try {
    const { id } = req.params;

    const news = await News.findByIdAndDelete(id);

    if (!news) {
      return res.status(404).json({
        success: false,
        message: 'News not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'News deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting news:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting news',
      error: error.message
    });
  }
};

module.exports = {
  getAllNewsAdmin,
  getNewsById,
  createNews,
  updateNews,
  deleteNews
};
