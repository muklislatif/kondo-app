const fs = require('fs');

const { name, env, env_production } = JSON.parse(fs.readFileSync(`${__dirname}/config.json`, 'utf8'));

module.exports = {
  apps: [{
    name,
    env,
    env_production,
    script: './server.js',
    cwd: './',
    instances: 'max',
    exec_mode: 'cluster',
    merge_logs: true,
    kill_timeout: 8000,
  }],
};
