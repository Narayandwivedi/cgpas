const express = require('express');
const router = express.Router();
const {
  getAllBranchesAdmin,
  getBranchById,
  createBranch,
  updateBranch,
  deleteBranch
} = require('../controller/adminBranchController');

// Admin routes for branch management
router.get('/', getAllBranchesAdmin);
router.get('/:id', getBranchById);
router.post('/', createBranch);
router.put('/:id', updateBranch);
router.delete('/:id', deleteBranch);

module.exports = router;
