const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Ensure upload directories exist
const uploadsDir = path.join(__dirname, '../uploads');
const blogImagesDir = path.join(uploadsDir, 'blogs');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

if (!fs.existsSync(blogImagesDir)) {
  fs.mkdirSync(blogImagesDir, { recursive: true });
}

// Upload featured image for blog
const uploadBlogFeaturedImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded'
      });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    const filename = `blog-${timestamp}-${randomString}.webp`;
    const filepath = path.join(blogImagesDir, filename);

    // Process image with sharp
    // Convert to WebP and optimize for SEO
    await sharp(req.file.buffer)
      .resize({
        width: 1200,  // Max width for blog featured images (good for SEO and performance)
        height: 630,  // OG image standard height (perfect for social sharing)
        fit: 'cover', // Cover the area, crop if needed
        position: 'center'
      })
      .webp({
        quality: 85,  // High quality but optimized (good balance for SEO)
        effort: 6     // Higher compression effort (0-6, 6 is best compression)
      })
      .toFile(filepath);

    // Get file size for response
    const stats = fs.statSync(filepath);
    const fileSizeInKB = (stats.size / 1024).toFixed(2);

    // Generate URL for the uploaded image
    const imageUrl = `/uploads/blogs/${filename}`;

    res.status(200).json({
      success: true,
      message: 'Image uploaded successfully',
      data: {
        filename,
        url: imageUrl,
        size: `${fileSizeInKB} KB`,
        dimensions: {
          width: 1200,
          height: 630
        },
        format: 'webp'
      }
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({
      success: false,
      message: 'Error uploading image',
      error: error.message
    });
  }
};

// Upload gallery image
const uploadGalleryImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded'
      });
    }

    // Ensure gallery directory exists
    const galleryDir = path.join(uploadsDir, 'gallery');
    if (!fs.existsSync(galleryDir)) {
      fs.mkdirSync(galleryDir, { recursive: true });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    const filename = `gallery-${timestamp}-${randomString}.webp`;
    const filepath = path.join(galleryDir, filename);

    // Process image with sharp
    // Optimize for gallery display
    await sharp(req.file.buffer)
      .resize({
        width: 1920,  // Full HD width
        height: 1080, // Full HD height
        fit: 'inside', // Maintain aspect ratio, fit within dimensions
        withoutEnlargement: true // Don't upscale smaller images
      })
      .webp({
        quality: 90,  // Higher quality for gallery images
        effort: 6
      })
      .toFile(filepath);

    // Create thumbnail
    const thumbnailFilename = `gallery-${timestamp}-${randomString}-thumb.webp`;
    const thumbnailPath = path.join(galleryDir, thumbnailFilename);

    await sharp(req.file.buffer)
      .resize({
        width: 400,
        height: 400,
        fit: 'cover',
        position: 'center'
      })
      .webp({
        quality: 80,
        effort: 6
      })
      .toFile(thumbnailPath);

    // Get file sizes
    const stats = fs.statSync(filepath);
    const thumbStats = fs.statSync(thumbnailPath);
    const fileSizeInKB = (stats.size / 1024).toFixed(2);
    const thumbSizeInKB = (thumbStats.size / 1024).toFixed(2);

    // Generate URLs
    const imageUrl = `/uploads/gallery/${filename}`;
    const thumbnailUrl = `/uploads/gallery/${thumbnailFilename}`;

    res.status(200).json({
      success: true,
      message: 'Gallery image uploaded successfully',
      data: {
        filename,
        url: imageUrl,
        thumbnailUrl,
        size: `${fileSizeInKB} KB`,
        thumbnailSize: `${thumbSizeInKB} KB`,
        format: 'webp'
      }
    });
  } catch (error) {
    console.error('Error uploading gallery image:', error);
    res.status(500).json({
      success: false,
      message: 'Error uploading gallery image',
      error: error.message
    });
  }
};

// Delete image
const deleteImage = async (req, res) => {
  try {
    const { filepath } = req.body;

    if (!filepath) {
      return res.status(400).json({
        success: false,
        message: 'Filepath is required'
      });
    }

    // Construct full path
    const fullPath = path.join(__dirname, '..', filepath);

    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      return res.status(404).json({
        success: false,
        message: 'File not found'
      });
    }

    // Delete file
    fs.unlinkSync(fullPath);

    res.status(200).json({
      success: true,
      message: 'Image deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting image',
      error: error.message
    });
  }
};

module.exports = {
  uploadBlogFeaturedImage,
  uploadGalleryImage,
  deleteImage
};
