const mysql = require('mysql2/promise');
const Promise = require('bluebird');
const config = require('../config');
const appState = require('./appState');

const pool = mysql.createPool({
  host: config.db.host,
  port: config.db.port,
  user: config.db.user,
  password: config.db.password,
  database: config.db.name,
  Promise,
  dateStrings: true,
});

pool.getConnection()
  .then((conn) => {
    conn.release();
    appState.setReady('MYSQL_CONNECTION');
  });

appState.on('terminate', () => {
  setTimeout(() => {
    pool.getConnection()
      .then((conn) => {
        conn.release();
        appState.setTerminated('MYSQL');
      });
  }, 2000);
});

module.exports = pool;
