const Promise = require('bluebird');
const redis = require('redis');
const { logger } = require('./logger');
const appState = require('./appState');

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

const redisClient = redis
  .createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  });

redisClient.on('connect', () => {
  appState.setReady('REDIS');
});

appState.on('terminate', () => {
  redisClient.quit((err) => {
    if (err) {
      logger.error('Cannot close redis connection: ', err);
    } else {
      appState.setTerminated('REDIS');
    }
  });
});

module.exports = redisClient;
