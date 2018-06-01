var path = require('path');
var webpack = require('webpack');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: ['./app/app.js', './app/styles/app.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true,
  performance: { hints: false },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
          loader: 'file-loader',
          options: {
            name: '[name].css',
            outputPath: '/'
          }
        },
        {
          loader: 'extract-loader'
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'postcss-loader'
        },
        {
          loader: 'sass-loader'
        }
      ]
    }]
  },
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] }
    })
  ]
};