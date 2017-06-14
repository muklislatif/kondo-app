const jwt = require('jsonwebtoken');
const Promise = require('bluebird');

const SECRET = process.env.APP_SECRET;
const JWT_PREFIX = process.env.APP_JWT_PREFIX;

exports.getToken = userId => new Promise((resolve, reject) => {
  jwt.sign({
    userId,
  }, SECRET, {
    expiresIn: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 3),
  }, (err, token) => {
    if (err) {
      reject(err);
    } else {
      resolve(`${JWT_PREFIX}${token}`);
    }
  });
});

exports.getUser = token => new Promise((resolve, reject) => {
  jwt.verify(token, SECRET, (err, payload) => {
    if (err || !payload) {
      reject(err);
    } else {
      resolve(payload.userId);
    }
  });
});
