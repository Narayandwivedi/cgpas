const express = require('express');
const router = express.Router();
const { exportData } = require('../controller/exportController');

router.get('/export', exportData);

module.exports = router;


