const uuid = require('uuid');
const db = require('../../../utils/mysqlConnector');

exports.getAllPosts = () => db
  .then(conn => conn.query('SELECT * FROM posts'))
  .then(([result, _]) => ({
    posts: result,
    length: result.length,
  }));

exports.getPostById = id => db
  .then(conn => conn.query('SELECT * FROM posts WHERE id=?', [id]))
  .then(([result, _]) => result[0]);

exports.createPost = (userId, subject, content, pinned, status) => db
  .then(conn => conn.query('INSERT INTO posts VALUES(?, ?, ?, ?, ?, ?, DEFAULT, DEFAULT)', [uuid.v4(), subject, content, pinned ? 1 : 0, status, userId]));

exports.updatePost = (id, userId, subject, content, pinned, status) => db
  .then(conn => conn.query('UPDATE posts SET ? WHERE id = ?', [{ subject, content }, id]));

exports.deletePost = id => db
  .then(conn => conn.query('DELETE FROM posts WHERE id = ?', [id]));
