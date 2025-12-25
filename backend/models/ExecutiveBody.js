const mongoose = require("mongoose");

const executiveBodySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  position: {
    type: String,
    required: true,
    trim: true,
  },
  organization: {
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["draft", "published"],
    default: "published",
  },
  priority: {
    type: Number,
    default: 0,
    min: 0,
  },
}, {
  timestamps: true,
});

const ExecutiveBody = mongoose.model("ExecutiveBody", executiveBodySchema);

module.exports = ExecutiveBody;
