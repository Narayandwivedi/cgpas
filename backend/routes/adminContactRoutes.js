const express = require('express');
const router = express.Router();
const { getAllContacts } = require('../controller/adminContactController');

router.get('/', getAllContacts);

module.exports = router;
