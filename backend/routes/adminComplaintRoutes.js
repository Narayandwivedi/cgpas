const express = require('express');
const router = express.Router();
const { getAllComplaints } = require('../controller/adminComplaintController');

router.get('/', getAllComplaints);

module.exports = router;
