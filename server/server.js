const http = require('http');

const dbConnection = require('./utils/mysqlConnector');
const redisConnection = require('./utils/redisClient');
const appState = require('./utils/appState');
const { logger } = require('./utils/logger');

const createApp = require('./app');

const app = createApp({ dbConnection, redisConnection }, logger);

appState.setReady('KONDO_API');

appState.on('ready', () => {
  const httpServer = http.createServer(app);
  const PORT = process.env.PORT;

  httpServer.listen(PORT, (err) => {
    if (err) {
      logger.error(err);
    } else {
      logger.info(`Application running on ${PORT}`);
      process.send = process.send || function () {};
      process.send('ready');
    }
  });
});

appState.on('terminate', () => {
  setTimeout(() => {
    appState.setTerminated('KONDO_API');
  }, 5000);
});
