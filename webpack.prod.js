const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: "production",
  watch: false,
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.min.js'
    }
  },
  plugins: [
    // ...
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'API_URL': JSON.stringify('https://api.github.com'),
    })
  ]
});