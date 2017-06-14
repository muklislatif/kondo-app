const { logger } = require('../../utils/logger');

const { getMembersByUserPassword } = require('./services/members');
const { getToken } = require('./services/auth');

exports.auth = (req, res) => {
  const { username, password } = req.body;
  getMembersByUserPassword(username, password)
    .then(user => getToken(user))
    .then(token => res.json({ token }))
    .catch((err) => {
      logger.error(`[AUTH] cannot perform auth for ${username}:${password}`, err);
      return res.status(500).json({ message: 'cannot perform auth' });
    });
};
