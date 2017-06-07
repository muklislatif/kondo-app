const db = require('../../../utils/mysqlConnector');

exports.getMembersByUserPassword = (username, password) => db
  .then(conn => conn.query('SELECT id, name, email FROM members where username = ? AND password = ?', [username, password]))
  .then((result) => {
    if (!result.length) throw new Error('[MEMBERS] username / password not found');
    if (result.length > 1) throw new Error('[MEMBERS] duplicate entry');
    return result[0];
  });
