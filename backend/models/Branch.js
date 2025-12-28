const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    trim: true,
    default: null
  },
  district: {
    type: String,
    trim: true,
    default: null
  },
  city: {
    type: String,
    trim: true,
    default: null
  },
  mobileNumber: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    default: null,
    lowercase: true
  },
  fullAddress: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  head1Name: {
    type: String,
    trim: true,
    default: null
  },
  head1Designation: {
    type: String,
    trim: true,
    default: null
  },
  head1Mobile: {
    type: String,
    trim: true,
    default: null
  },
  head2Name: {
    type: String,
    trim: true,
    default: null
  },
  head2Designation: {
    type: String,
    trim: true,
    default: null
  },
  head2Mobile: {
    type: String,
    trim: true,
    default: null
  }
}, {
  timestamps: true
});

// Index for search functionality
branchSchema.index({ country: 1, state: 1, district: 1, city: 1 });
branchSchema.index({ status: 1 });

const Branch = mongoose.model('Branch', branchSchema);

module.exports = Branch;
