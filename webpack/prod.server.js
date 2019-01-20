const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackBar = require('webpackbar');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./base.config');

const publicPath = '/static/';

const config = {
  mode: 'production',
  target: 'node',
  entry: [path.resolve(__dirname, './polyfill'), path.resolve(__dirname, '../server')],
  output: {
    path: path.join(__dirname, '../build', 'server'),
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath,
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  externals: [webpackNodeExternals()],
  plugins: [new WebpackBar({ name: 'Server' }), new WebpackAssetsManifest({ publicPath })],
};

module.exports = merge(baseConfig, config);
