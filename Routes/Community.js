const express = require('express');
const router = express.Router();
const { addCommunity } = require('../Controller/communityController');
router.post('/CreateCommunity', addCommunity);
module.exports = router;