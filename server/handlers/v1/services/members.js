const db = require('../../../utils/mysqlConnector');

exports.getMembersByUserPassword = (username, password) => db
  .then(conn => conn.query('SELECT id FROM members where username = ? AND password = ?', [username, password]))
  .then((result) => {
    if (!result[0].length) throw new Error('[GET MEMBERS BY USERNAME & PASSWORD] username / password not found');
    if (result[0].length > 1) throw new Error('[GET MEMBERS BY USERNAME & PASSWORD] duplicate entry');
    return result[0][0].id;
  });
