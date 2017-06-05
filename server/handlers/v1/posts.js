const post = require('./services/post');

function createPostsHandler(dbConnection, _, logger) {
  /** Get all posts */
  const getPosts = (req, res) => post.getAllPosts()
    .then(result => res.json(result))
    .catch((err) => {
      logger.error(err.message);
      return res.status(500).json({ message: err.message });
    });

  /** Get post by ID */
  const getPostById = (req, res) => {
    const { id } = req.params;
    return post.getPostById(id)
      .then(result => res.json(result))
      .catch((err) => {
        logger.error(err.message);
        return res.status(500).json({ message: err.message });
      });
  };

  /** Create new post */
  const createPost = (req, res) => {
    const { subject, content } = req.body;
    return post.createPost(subject, content)
      .then(result => res.json(result))
      .catch((err) => {
        logger.error(err.message);
        return res.status(500).json({ message: err.message });
      });
  };

  /** Update post */
  const updatePost = (req, res) => {
    const { id } = req.params;
    const { subject, content } = req.body;
    return post.updatePost(id, subject, content)
      .then(result => res.json(result))
      .catch((err) => {
        logger.error(err.message);
        return res.status(500).json({ message: err.message });
      });
  };

  /** Delete post */
  const deletePost = (req, res) => {
    const { id } = req.params;
    return post.deletePost(id)
      .then(() => res.json({ id }))
      .catch((err) => {
        logger.error(err.message);
        return res.status(500).json({ message: err.message });
      });
  };
  return {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
  };
}

module.exports = createPostsHandler;
