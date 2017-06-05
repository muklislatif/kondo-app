const http = require('http');

const dbConnection = require('./utils/mysqlConnector');
const { logger } = require('./utils/logger');

const createApp = require('./app');

const app = createApp(dbConnection, logger);
const httpServer = http.createServer(app);
const PORT = process.env.PORT;

httpServer.listen(PORT, (err) => {
  if (err) logger.error(err);
  else logger.info(`Application running on ${PORT}`);
});
