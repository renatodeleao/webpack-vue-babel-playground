const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const prod = require('./webpack.prod.js');

module.exports = merge(prod, {
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: true,
    compress: true,
    contentBase: path.join(__dirname, 'public'),
    port: 1234,
  }
});