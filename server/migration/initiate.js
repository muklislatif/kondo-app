const fs = require('fs');
const Promise = require('bluebird');
const { execSync } = require('child_process');
const db = require('../utils/mysqlConnector');
const { logger } = require('../utils/logger');

const migrationScript = fs.readFileSync(`${__dirname}/schema.sql`, 'utf8').split('====');

const executeSQL = query => db
  .getConnection(conn => conn.query(query))
  .then(() => logger.info(`DONE: ${query}`));

const migrate = () => {
  logger.info('Initiating migration...');
  execSync(`mysql --user=${process.env.MYSQL_USER} --password=${process.env.MYSQL_PASSWORD} --execute="CREATE SCHEMA IF NOT EXISTS ${process.env.MYSQL_DBNAME}"`);
  logger.info('Using the following SQL:');
  logger.info(migrationScript);
  return Promise.mapSeries(migrationScript, executeSQL)
    .then(() => {
      logger.info('Done initiating db');
    });
};

migrate()
  .then(() => {
    logger.info('Please ignore error message from nodemon, the migration has passed successfully.');
  })
  .catch((err) => {
    logger.error(err);
  })
  .finally(() => {
    process.kill(process.pid);
  });
