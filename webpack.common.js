//webpack vue-loader vue-style-loader css-loader sass-loader node-sass babel-loader clean-webpack-plugin
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: "./src/main.js", // string | object | array  // defaults to ./src
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new CleanWebpackPlugin(path.resolve(__dirname, "public/build")),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'API_URL': JSON.stringify('https://api.github.com'),
    })
  ],
  module: {
    rules: [{
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'file-loader',
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'file-loader',
    },
    {
      test: /\.scss$/,
      use: [
        "vue-style-loader",
        "css-loader",
        "sass-loader"
      ]
    },
    {
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader',
      ]
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: file => (/node_modules/.test(file) && !/\.vue\.js/.test(file))
    }
  ]
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: "[name].chunk.[chunkhash].js",
    path: path.resolve(__dirname, "public/build"), // the filename template for entry chunks
    publicPath: "/build/", // the url to the output directory resolved relative to the HTML pageå
  }
}