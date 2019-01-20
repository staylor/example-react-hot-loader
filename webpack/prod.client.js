const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackBar = require('webpackbar');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const baseConfig = require('./base.config');

const publicPath = '/static/';

const config = {
  mode: 'production',
  target: 'web',
  entry: [path.resolve(__dirname, './polyfill'), path.resolve(__dirname, '../client')],
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name]-[contenthash].js',
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
  plugins: [new WebpackBar({ name: 'Client' }), new WebpackAssetsManifest({ publicPath })],
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
};

module.exports = merge(baseConfig, config);
