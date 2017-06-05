const mysql = require('mysql2/promise');
const Promise = require('bluebird');
const config = require('../config');

const dbConfig = {
  host: config.db.host,
  port: config.db.port,
  user: config.db.user,
  password: config.db.password,
  Promise,
  dateStrings: true,
};

const pool = mysql.createPool(Object.assign(dbConfig, { database: config.db.name }));

module.exports = pool;
