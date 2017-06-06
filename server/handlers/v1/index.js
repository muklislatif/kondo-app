const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const {
  getMembers,
} = require('./members');
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require('./posts');

const router = express.Router();

router.use(bodyParser.urlencoded({
  extended: true,
}));
router.use(bodyParser.json());
router.use(cookieParser());

/** members */
router.get('/members', getMembers);

/** posts */
router.get('/posts', getPosts);
router.get('/post/:id', getPostById);
router.post('/post', createPost);
router.post('/post/:id', updatePost);
router.delete('/post/:id', deletePost);

module.exports = router;
