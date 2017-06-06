const { logger } = require('./../utils/logger');

exports.handle404 = (req, res) => res.json({ message: `Route '${req.path}' not found :(` });

exports.handle500 = (err, req, res, next) => {
  logger.error(err.messages || err);
  return res.status(500).json({
    message: err.message || err,
    stack: err.stack,
  });
};
