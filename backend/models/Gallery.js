const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  mediaType: {
    type: String,
    enum: ["image", "video"],
    required: true,
  },
  // For images: path to uploaded image file
  imageUrl: {
    type: String,
  },
  // For videos: YouTube video URL
  videoUrl: {
    type: String,
  },
  altText: {
    type: String,
    default: '',
    maxlength: 125,
  },
  status: {
    type: String,
    enum: ["draft", "published"],
    default: "published",
  },
  uploadedBy: {
    type: String,
    default: "Admin",
  },
  priority: {
    type: Number,
    default: 0,
    min: 0,
  },
}, {
  timestamps: true,
});

const Gallery = mongoose.model("Gallery", gallerySchema);

module.exports = Gallery;
