const dotenv = require('dotenv');

exports.init = () => {
  dotenv.config({ path: './config.env' });
};

exports.isLoggerEnabled = () => {
  return process.env.LOG_ENABLED;
};

exports.getPort = () => {
  return process.env.PORT || 3000;
};
