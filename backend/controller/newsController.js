const News = require('../models/News');

// Get all published news
const getAllNews = async (req, res) => {
  try {
    const news = await News.find({ status: 'published' })
      .sort({ publishedAt: -1, createdAt: -1 })
      .select('-__v');

    res.status(200).json({
      success: true,
      count: news.length,
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

// Search and filter news
const searchNews = async (req, res) => {
  try {
    const { search, newsType, status = 'published' } = req.query;

    // Build search query
    let query = { status };

    // Add news type filter if provided
    if (newsType && newsType !== 'all') {
      query.newsType = newsType;
    }

    // Add search filter if provided
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
        { tags: { $regex: search, $options: 'i' } }
      ];
    }

    const news = await News.find(query)
      .sort({ publishedAt: -1, createdAt: -1 })
      .select('-__v');

    res.status(200).json({
      success: true,
      count: news.length,
      news
    });
  } catch (error) {
    console.error('Error searching news:', error);
    res.status(500).json({
      success: false,
      message: 'Error searching news',
      error: error.message
    });
  }
};

// Get news by type (cg, national, international)
const getNewsByType = async (req, res) => {
  try {
    const { type } = req.params;

    // Validate news type
    if (!['cg', 'national', 'international'].includes(type)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid news type. Must be cg, national, or international'
      });
    }

    const news = await News.find({ newsType: type, status: 'published' })
      .sort({ publishedAt: -1, createdAt: -1 })
      .select('-__v');

    res.status(200).json({
      success: true,
      count: news.length,
      news
    });
  } catch (error) {
    console.error('Error fetching news by type:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching news',
      error: error.message
    });
  }
};

// Get news by slug
const getNewsBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const news = await News.findOne({ slug, status: 'published' });

    if (!news) {
      return res.status(404).json({
        success: false,
        message: 'News not found'
      });
    }

    // Increment views
    news.views += 1;
    await news.save();

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

module.exports = {
  getAllNews,
  searchNews,
  getNewsByType,
  getNewsBySlug
};
