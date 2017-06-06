const http = require('http');

const app = require('./app');
const appState = require('./utils/appState');
const { logger } = require('./utils/logger');

appState.setReady('KONDO_API');

appState.on('ready', () => {
  const httpServer = http.createServer(app);
  const PORT = process.env.PORT;

  httpServer.listen(PORT, (err) => {
    if (err) {
      logger.error(err);
    } else {
      logger.info(`Application running on ${PORT}`);
      process.send && process.send('ready'); // eslint-disable-line
    }
  });
});

appState.on('terminate', () => {
  setTimeout(() => {
    appState.setTerminated('KONDO_API');
  }, 5000);
});
