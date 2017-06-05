const db = require('../../../utils/mysqlConnector');

module.exports = {
  getAllPosts: () => db.getConnection(conn => conn.query('SELECT * FROM posts')),
  getPostById: id => db.getConnection(conn => conn.query('SELECT * FROM posts WHERE id=?', [id])),
  createPost: (subject, content) => db.getConnection(conn => conn.query('INSERT INTO posts VALUES(NULL, ?, ?, DEFAULT, DEFAULT)', [subject, content])),
  updatePost: (id, subject, content) => db.getConnection(conn => conn.query('UPDATE posts SET ? WHERE id = ?', [{ subject, content }, id])),
  deletePost: id => db.getConnection(conn => conn.query('DELETE FROM posts WHERE id = ?', [id])),
};
