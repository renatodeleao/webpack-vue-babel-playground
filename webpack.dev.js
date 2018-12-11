const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: "development",
  devtool: 'inline-source-map',
  // Here the application starts executing
  // and webpack starts bundling
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: true,
    compress: true,
    contentBase: path.join(__dirname, 'public'),
    port: 1234,
  },
  watch: true,
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  }
});