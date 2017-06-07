const mysql = require('mysql2/promise');
const Promise = require('bluebird');

const appState = require('./appState');

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DBNAME,
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

module.exports = pool.getConnection();
