function createErrorHandler(logger) {
  const handle404 = (req, res) => res.json({ message: `Route '${req.path}' not found :(` });
  const handle500 = (err, req, res, next) => {
    logger.error(err.messages || err);
    return res.status(500).json({
      message: err.message || err,
      stack: err.stack,
    });
  };
  return {
    handle404,
    handle500,
  };
}

module.exports = createErrorHandler;
