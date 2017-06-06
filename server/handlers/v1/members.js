const { logger } = require('../../utils/logger');

exports.getMembers = (req, res) => {
  logger.info('Receiving members');
  return res.json({ message: 'members!' });
};
