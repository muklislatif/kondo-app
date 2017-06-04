function createMembersHandler(dbConnection, _, logger) {
  const getMembers = (req, res) => {
    logger.info('Receiving members');
    return res.json({ message: 'members!' });
  };
  return {
    getMembers,
  };
}

module.exports = createMembersHandler;
