const express = require('express');
const router = express.Router();
const { createSuggestion } = require('../controller/suggestionController');

router.post('/', createSuggestion);

module.exports = router;
