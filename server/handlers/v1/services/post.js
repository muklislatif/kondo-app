const db = require('../../../utils/mysqlConnector');

exports.getAllPosts = () => db
  .then(conn => conn.query('SELECT * FROM posts'));

exports.getPostById = id => db
  .then(conn => conn.query('SELECT * FROM posts WHERE id=?', [id]))
  .then(results => results[0]);

exports.createPost = (subject, content) => db
  .then(conn => conn.query('INSERT INTO posts VALUES(NULL, ?, ?, DEFAULT, DEFAULT)', [subject, content]));

exports.updatePost = (id, subject, content) => db
  .then(conn => conn.query('UPDATE posts SET ? WHERE id = ?', [{ subject, content }, id]));

exports.deletePost = id => db
  .then(conn => conn.query('DELETE FROM posts WHERE id = ?', [id]));
