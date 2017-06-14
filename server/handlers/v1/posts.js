const post = require('./services/post');
const { logger } = require('../../utils/logger');

/** Get all posts */
exports.getPosts = (req, res) => post.getAllPosts()
  .then(result => res.json(result))
  .catch((err) => {
    logger.error('[POST:GETALL]', err.message);
    return res.status(500).json({ message: err.message });
  });

/** Get post by ID */
exports.getPostById = (req, res) => {
  const { id } = req.params;
  return post.getPostById(id)
    .then(result => res.json(result))
    .catch((err) => {
      logger.error('[POST:GETBYID]', err.message);
      return res.status(500).json({ message: err.message });
    });
};

/** Create new post */
exports.createPost = (req, res) => {
  const { subject, content, pinned, status } = req.body;
  const userId = req.userId;
  return post.createPost(userId, subject, content, pinned, status)
    .then(() => res.json({ message: 'OK' }))
    .catch((err) => {
      logger.error('[POST:CREATE]', err.message);
      return res.status(500).json({ message: err.message });
    });
};

/** Update post */
exports.updatePost = (req, res) => {
  const { id } = req.params;
  const { subject, content } = req.body;
  return post.updatePost(id, subject, content)
    .then(result => res.json(result))
    .catch((err) => {
      logger.error('[POST:UPDATE]', err.message);
      return res.status(500).json({ message: err.message });
    });
};

/** Delete post */
exports.deletePost = (req, res) => {
  const { id } = req.params;
  return post.deletePost(id)
    .then(() => res.json({ id }))
    .catch((err) => {
      logger.error('[POST:DELETE]', err.message);
      return res.status(500).json({ message: err.message });
    });
};
