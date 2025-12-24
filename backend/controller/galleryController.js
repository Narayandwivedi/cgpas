const Gallery = require('../models/Gallery');

// Get all published gallery items (for frontend)
const getAllGallery = async (req, res) => {
  try {
    const galleryItems = await Gallery.find({ status: 'published' })
      .sort({ priority: 1, createdAt: -1 })
      .select('-__v');

    res.status(200).json({
      success: true,
      count: galleryItems.length,
      gallery: galleryItems
    });
  } catch (error) {
    console.error('Error fetching gallery:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching gallery',
      error: error.message
    });
  }
};

// Get gallery item by ID
const getGalleryById = async (req, res) => {
  try {
    const { id } = req.params;

    const galleryItem = await Gallery.findById(id);

    if (!galleryItem) {
      return res.status(404).json({
        success: false,
        message: 'Gallery item not found'
      });
    }

    // Only return published items for frontend
    if (galleryItem.status !== 'published') {
      return res.status(404).json({
        success: false,
        message: 'Gallery item not found'
      });
    }

    res.status(200).json({
      success: true,
      gallery: galleryItem
    });
  } catch (error) {
    console.error('Error fetching gallery item:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching gallery item',
      error: error.message
    });
  }
};

module.exports = {
  getAllGallery,
  getGalleryById
};
