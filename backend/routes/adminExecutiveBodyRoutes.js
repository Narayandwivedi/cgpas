const express = require('express');
const router = express.Router();
const {
  getAllExecutiveBodyAdmin,
  getExecutiveBodyById,
  createExecutiveBody,
  updateExecutiveBody,
  deleteExecutiveBody
} = require('../controller/adminExecutiveBodyController');

// Get all executive body members (including drafts)
router.get('/', getAllExecutiveBodyAdmin);

// Get executive body member by ID
router.get('/:id', getExecutiveBodyById);

// Create new executive body member
router.post('/', createExecutiveBody);

// Update executive body member
router.put('/:id', updateExecutiveBody);

// Delete executive body member
router.delete('/:id', deleteExecutiveBody);

module.exports = router;
