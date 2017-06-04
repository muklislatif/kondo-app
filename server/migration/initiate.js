const db = require('../utils/mysqlConnector');
const fs = require('fs');
const { execSync } = require('child_process');
const Promise = require('bluebird');

const config = require('../config');

const migrationScript = fs.readFileSync(`${__dirname}/schema.sql`, 'utf8').split('====');

const executeSQL = query => db
  .getConnection(conn => conn.query(query))
  .then(() => console.log(`DONE: ${query}`));

const migrate = () => {
  console.log('Initiating migration...');
  execSync(`mysql --user=${config.db.user} --password=${config.db.password} --execute="CREATE SCHEMA IF NOT EXISTS ${config.db.name}"`);
  console.log('Using the following SQL: \n');
  console.log(migrationScript);
  console.log('\n');
  return Promise.mapSeries(migrationScript, executeSQL)
    .then(() => {
      console.log('Done initiating db');
    });
};

migrate()
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    process.exit();
  });
