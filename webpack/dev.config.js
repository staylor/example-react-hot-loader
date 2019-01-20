const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackBar = require('webpackbar');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const baseConfig = require('./base.config');

const publicPath = '/';

const config = {
  mode: 'development',
  target: 'web',
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(__dirname, './polyfill'),
    path.resolve(__dirname, '../client'),
  ],
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name].js',
    publicPath,
  },
  devServer: {
    noInfo: true,
    publicPath,
    logLevel: 'silent',
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              env: {
                development: {
                  plugins: ['react-hot-loader/babel'],
                },
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackBar({ name: 'Dev Server' }),
    new WebpackAssetsManifest({ publicPath }),
    new webpack.HotModuleReplacementPlugin(),
  ],
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
