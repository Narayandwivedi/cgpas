const Gallery = require('../models/Gallery');

// Admin: Get all gallery items (including drafts)
const getAllGalleryAdmin = async (req, res) => {
  try {
    const galleryItems = await Gallery.find()
      .sort({ priority: 1, createdAt: -1 })
      .select('-__v');

    res.status(200).json({
      success: true,
      count: galleryItems.length,
      gallery: galleryItems
    });
  } catch (error) {
    console.error('Error fetching all gallery items:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching gallery',
      error: error.message
    });
  }
};

// Admin: Get gallery item by ID
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

// Admin: Create new gallery item
const createGallery = async (req, res) => {
  try {
    const galleryData = req.body;

    // Validate based on mediaType
    if (galleryData.mediaType === 'image' && !galleryData.imageUrl) {
      return res.status(400).json({
        success: false,
        message: 'Image URL is required for image type'
      });
    }

    if (galleryData.mediaType === 'video' && !galleryData.videoUrl) {
      return res.status(400).json({
        success: false,
        message: 'Video URL is required for video type'
      });
    }

    const galleryItem = new Gallery(galleryData);
    await galleryItem.save();

    res.status(201).json({
      success: true,
      message: 'Gallery item created successfully',
      gallery: galleryItem
    });
  } catch (error) {
    console.error('Error creating gallery item:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating gallery item',
      error: error.message
    });
  }
};

// Admin: Update gallery item
const updateGallery = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const galleryItem = await Gallery.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!galleryItem) {
      return res.status(404).json({
        success: false,
        message: 'Gallery item not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Gallery item updated successfully',
      gallery: galleryItem
    });
  } catch (error) {
    console.error('Error updating gallery item:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating gallery item',
      error: error.message
    });
  }
};

// Admin: Delete gallery item
const deleteGallery = async (req, res) => {
  try {
    const { id } = req.params;

    const galleryItem = await Gallery.findByIdAndDelete(id);

    if (!galleryItem) {
      return res.status(404).json({
        success: false,
        message: 'Gallery item not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Gallery item deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting gallery item:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting gallery item',
      error: error.message
    });
  }
};

module.exports = {
  getAllGalleryAdmin,
  getGalleryById,
  createGallery,
  updateGallery,
  deleteGallery
};
