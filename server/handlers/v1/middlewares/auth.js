const { getUser } = require('../services/auth');
const { logger } = require('../../../utils/logger');

const JWT_PREFIX = process.env.APP_JWT_PREFIX;

module.exports = (req, res, next) => {
  const { Authorization } = req.headers;
  if (!Authorization) return res.status(401).json({ message: `unauthorized access to ${req.path}` });
  const token = Authorization.replace(`Bearer ${JWT_PREFIX}`, '');
  getUser(token)
    .then((userId) => {
      Object.assign(req, { userId });
      next();
    })
    .catch((err) => {
      logger.error('[AUTH MIDDLEWARE]', err);
      return res.status(400).json({ message: 'cannot validate token' });
    });
};
