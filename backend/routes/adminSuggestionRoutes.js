const express = require('express');
const router = express.Router();
const { getAllSuggestions } = require('../controller/adminSuggestionController');

router.get('/', getAllSuggestions);

module.exports = router;
