const express = require('express');
const router = express.Router();
const {
  getAllExecutiveBody,
  getExecutiveBodyById
} = require('../controller/executiveBodyController');

// Get all published executive body members
router.get('/', getAllExecutiveBody);

// Get executive body member by ID
router.get('/:id', getExecutiveBodyById);

module.exports = router;
