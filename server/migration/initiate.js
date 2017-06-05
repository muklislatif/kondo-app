const mysql = require('mysql2/promise');
const fs = require('fs');
const { execSync } = require('child_process');
const Promise = require('bluebird');

const { env } = JSON.parse(fs.readFileSync(`${__dirname}/../config.json`, 'utf8'));
const migrationScript = fs.readFileSync(`${__dirname}/schema.sql`, 'utf8').split('====');

const db = mysql.createPool({
  host: env.MYSQL_HOST,
  port: env.MYSQL_PORT,
  user: env.MYSQL_USER,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DBNAME,
  Promise,
  dateStrings: true,
});

const executeSQL = query => db
  .getConnection(conn => conn.query(query))
  .then(() => console.log(`DONE: ${query}`));

const migrate = () => {
  console.log('Initiating migration...');
  execSync(`mysql --user=${env.MYSQL_USER} --password=${env.MYSQL_PASSWORD} --execute="CREATE SCHEMA IF NOT EXISTS ${env.MYSQL_DBNAME}"`);
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
