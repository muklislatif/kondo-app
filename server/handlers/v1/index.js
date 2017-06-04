const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const createMembersHandler = require('./members');
const createPostsHandler = require('./posts');

const router = express.Router();

function createV1Handler(dbConnection, appConfig, logger) {
  const {
    getMembers,
  } = createMembersHandler(dbConnection, appConfig, logger);

  const {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
  } = createPostsHandler(dbConnection, appConfig, logger);

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

  return router;
}

module.exports = createV1Handler;
