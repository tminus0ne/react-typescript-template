const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = (envVars) => {
  const { env } = envVars;
  const encConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, encConfig);

  return config;
};
