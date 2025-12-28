const express = require('express');
const router = express.Router();
const { createComplaint } = require('../controller/complaintController');

router.post('/', createComplaint);

module.exports = router;
