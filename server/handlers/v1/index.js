
const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./middlewares/auth');

const {
  auth,
} = require('./auth');
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

/** auth */
router.post('/auth', auth);

/** members */
router.get('/members', getMembers);

/** posts */
router.get('/posts', getPosts);
router.get('/post/:id', getPostById);
router.post('/post', authMiddleware, createPost);
router.post('/post/:id', authMiddleware, updatePost);
router.delete('/post/:id', authMiddleware, deletePost);

module.exports = router;
