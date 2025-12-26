const express = require('express');
const router = express.Router();
const {
  getAllBranches,
  getBranchById,
  getCountries,
  getStatesByCountry,
  getDistrictsByState
} = require('../controller/branchController');

// Public routes for branches
router.get('/', getAllBranches);
router.get('/countries', getCountries);
router.get('/states', getStatesByCountry);
router.get('/districts', getDistrictsByState);
router.get('/:id', getBranchById);

module.exports = router;
