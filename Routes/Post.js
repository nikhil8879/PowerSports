const express = require('express');
const { addpost, getPost, deletePost } = require('../Controller/PostController');
const fetchUser = require('../MiddleWare/fetchUser');
const router = express.Router();

router.post('/newPost', fetchUser,  addpost)
router.get('/getPost', fetchUser,  getPost)
router.delete('/deletePost/:id', fetchUser,  deletePost)
module.exports = router;