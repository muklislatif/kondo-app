const EventEmitter = require('events');
const { logger } = require('./logger');

class AppStateEmitter extends EventEmitter {}

const createAppState = (resourceNames) => {
  const appEmitter = new AppStateEmitter();
  logger.info('[APP STATE]', 'application starting');
  const resourceStatuses = resourceNames.reduce((prev, curr) => Object.assign({}, {
    [curr]: 'NOT_READY',
  }), {});
  let healthStatus = 200;
  process.on('SIGINT', () => {
    logger.info('[APP STATE]', 'SIGINT received, begin to gracefully shutdown...');
    healthStatus = 500;
    appEmitter.emit('terminate');
  });
  const getHealthStatus = () => healthStatus;
  appEmitter.on('exit', () => {
    process.exit();
  });
  const checkReadiness = () => {
    const readyResources = Object.keys(resourceStatuses)
      .filter(key => resourceStatuses[key] === 'READY');
    logger.info('[APP STATE]', 'Readiness:', readyResources.length, '/', resourceNames.length);
    if (readyResources.length === resourceNames.length) {
      appEmitter.emit('ready');
    }
  };
  const setReady = (resourceName) => {
    resourceStatuses[resourceName] = 'READY';
    logger.info('[APP STATE]', resourceName, 'is ready');
    checkReadiness();
  };
  const checkTermination = () => {
    const terminatedResources = Object.keys(resourceStatuses)
        .filter(key => resourceStatuses[key] === 'TERMINATED');
    logger.info('[APP STATE]', 'Terminated:',
        terminatedResources.length, '/', resourceNames.length);
    if (terminatedResources.length === resourceNames.length) {
      logger.info('Bye!');
      setTimeout(() => {
        process.exit();
      }, 2000);
    }
  };
  const setTerminated = (resourceName) => {
    resourceStatuses[resourceName] = 'TERMINATED';
    logger.info('[APP STATE]', resourceName, 'is terminated');
    checkTermination();
  };

  return {
    on: appEmitter.on.bind(appEmitter),
    getHealthStatus,
    setReady,
    setTerminated,
  };
};

module.exports = createAppState(['KONDO_API', 'MYSQL']);
