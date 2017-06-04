var db = require('../dbconnection');

var Post = {
    getAllPosts: function(callback){
        return db.query('SELECT * FROM posts', callback);
    },
    getPostById: function(id, callback){
        return db.query('SELECT * FROM posts WHERE id=?', [id], callback);
    },
    addPost: function(Post, callback){
        return db.query('INSERT INTO posts VALUES(NULL, ?, ?, DEFAULT, DEFAULT)', [Post.subject, Post.content], callback);
    },
    deletePost: function(id, callback){
        return db.query('DELETE FROM posts WHERE id = ?', [id], callback);
    },
    updatePost: function(id, Post, callback){
        var field = {
            'subject': Post.subject,
            'content': Post.content
        }
        return db.query('UPDATE posts SET ? WHERE id = ?', [field, id], callback);
    }
};

module.exports = Post;
