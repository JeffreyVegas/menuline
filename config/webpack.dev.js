const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    historyApiFallback: true,
    port: 3005,
  },
};

module.exports = merge(common, devConfig);
