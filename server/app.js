const express = require('express');
const cors = require('cors');

const v1Handlers = require('./handlers/v1');
const { handle404, handle500 } = require('./handlers/errorHandlers');

const app = express();

app.use(cors());
app.use('/v1', v1Handlers);
app.use(handle404);
app.use(handle500);

module.exports = app;
