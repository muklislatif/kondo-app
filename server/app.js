const express = require('express');
const cors = require('cors');

const createV1Handlers = require('./handlers/v1');
const createErrorHandlers = require('./handlers/errorHandlers');

function createApp({ dbConnection, redisConnection }, appConfig, logger) {
  const app = express();

  const v1Handlers = createV1Handlers({ dbConnection, redisConnection }, appConfig, logger);
  const { handle404, handle500 } = createErrorHandlers(logger);

  app.use(cors());
  app.use('/v1', v1Handlers);
  app.use(handle404);
  app.use(handle500);

  return app;
}

module.exports = createApp;
