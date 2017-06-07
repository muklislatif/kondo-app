const fs = require('fs');
const Promise = require('bluebird');
const { execSync } = require('child_process');
const db = require('../utils/mysqlConnector');
const { logger } = require('../utils/logger');

const migrationScript = fs.readFileSync(`${__dirname}/schema.sql`, 'utf8').split('####');

const executeSQL = (query, idx, length) => db
  .then(conn => conn.query(query))
  .then(() => logger.info(`[MIGRATION] [${1 + idx}/${length}]: ${query.split('\n').join(' ')}`))
  .catch(err => logger.error(`[MIGRATION] [${1 + idx}/${length}]: `, err));

const migrate = () => {
  logger.info('[MIGRATION] Initiating migration...');
  execSync(`mysql --user=${process.env.MYSQL_USER} --password=${process.env.MYSQL_PASSWORD} --execute="CREATE SCHEMA IF NOT EXISTS ${process.env.MYSQL_DBNAME}"`);
  logger.info('[MIGRATION] Using the following SQL:');
  return Promise.mapSeries(migrationScript, executeSQL)
    .then(() => {
      logger.info('[MIGRATION] Done initiating db');
    });
};

migrate()
  .then(() => {
    logger.info('[MIGRATION] Please ignore error message from nodemon, the migration has passed successfully.');
  })
  .catch((err) => {
    logger.error('[MIGRATION] Cannot migrate db: ', err);
  })
  .finally(() => {
    process.kill(process.pid);
  });
