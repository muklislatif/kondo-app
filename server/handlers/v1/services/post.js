const db = require('../../../utils/mysqlConnector');

exports.getAllPosts = () => db.getConnection().then(conn => conn.query('SELECT * FROM posts'));

exports.getPostById = id => db.getConnection().then(conn => conn.query('SELECT * FROM posts WHERE id=?', [id]));

exports.createPost = (subject, content) => db.getConnection().then(conn => conn.query('INSERT INTO posts VALUES(NULL, ?, ?, DEFAULT, DEFAULT)', [subject, content]));

exports.updatePost = (id, subject, content) => db.getConnection().then(conn => conn.query('UPDATE posts SET ? WHERE id = ?', [{ subject, content }, id]));

exports.deletePost = id => db.getConnection().then(conn => conn.query('DELETE FROM posts WHERE id = ?', [id]));
