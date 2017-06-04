const http = require('http');

const dbConnection = require('./utils/mysqlConnector');
const { logger } = require('./utils/logger');

const config = require('./config');
const createApp = require('./app');

const app = createApp(dbConnection, config, logger);
const httpServer = http.createServer(app);

httpServer.listen(config.port, (err) => {
  if (err) logger.error(err);
  else logger.info(`Application running on ${config.port}`);
});
