const { logger } = require('../../utils/logger');

const { getMembersByUserPassword } = require('./services/members');
const { setToken } = require('./services/auth');

exports.auth = (req, res) => {
  const { username, password } = req.body;
  getMembersByUserPassword(username, password)
    .then(user => setToken(user))
    .then(token => res.json({ token }))
    .catch((err) => {
      logger.error(`[LOGIN] cannot perform login for ${username}:${password}`, err);
      return res.status(500).json({ message: 'cannot perform login' });
    });
};
