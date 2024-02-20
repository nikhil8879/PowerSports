const express = require('express');
// const { addCommunity } = require('../Controller/communityController');
const { AddRelation } = require('../Controller/RelationController');
const router = express.Router();

router.post('/addInCommunity', AddRelation);
module.exports = router;