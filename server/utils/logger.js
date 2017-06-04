const winston = require('winston');
const util = require('util');

const consoleTransport = new winston.transports.Console({
  level: 'info',
  timestamp: () => new Date().toString(),
  colorize: true,
});
const transports = [consoleTransport];
const logger = {
  consoleTransport,
};

const axiosErrorHandler = (level, msg, meta) => {
  let newMeta = meta;
  if (meta instanceof Error && meta.response) {
    newMeta = util.inspect({
      description: meta.message,
      responseHeader: meta.response.headers,
      requestConfig: meta.response.config,
      responseData: meta.response.data,
    }, { showHidden: true, depth: null, breakLength: Infinity });
  }
  return newMeta;
};

logger.logger = new winston.Logger({
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
  },
  transports,
  rewriters: [axiosErrorHandler],
});

module.exports = logger;
