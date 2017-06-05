const http = require('http');

const dbConnection = require('./utils/mysqlConnector');
const redisConnection = require('./utils/redisClient');
const appState = require('./utils/appState');
const { logger } = require('./utils/logger');

const config = require('./config');
const createApp = require('./app');

const app = createApp({ dbConnection, redisConnection }, config, logger);

appState.setReady('KONDO_API');

appState.on('ready', () => {
  const httpServer = http.createServer(app);

  httpServer.listen(config.port, (err) => {
    if (err) logger.error(err);
    else logger.info(`Application running on ${config.port}`);
  });
});

appState.on('terminate', () => {
  setTimeout(() => {
    appState.setTerminated('KONDO_API');
  }, 5000);
});
