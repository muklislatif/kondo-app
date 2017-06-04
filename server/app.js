const express = require('express');
const cors = require('cors');

const createV1Handlers = require('./handlers/v1');

function createApp(dbConnection, appConfig, logger) {
  const app = express();
  const v1Handlers = createV1Handlers(dbConnection, appConfig, logger);

  app.use(cors());
  app.use('/v1', v1Handlers);

  return app;
}

module.exports = createApp;
