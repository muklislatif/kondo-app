const { getUser } = require('../services/auth');
const { logger } = require('../../../utils/logger');

const JWT_PREFIX = process.env.APP_JWT_PREFIX;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: `unauthorized access to ${req.path}` });
  const token = authorization.replace(`Bearer ${JWT_PREFIX}`, '');
  return getUser(token)
    .then((userId) => {
      Object.assign(req, { userId });
      next();
      return null;
    })
    .catch((err) => {
      logger.error('[AUTH MIDDLEWARE]', err.message);
      return res.status(400).json({ message: 'cannot validate token' });
    });
};
