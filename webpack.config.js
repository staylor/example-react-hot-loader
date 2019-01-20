const path = require('path');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const WebpackAssetsManifest = require('webpack-assets-manifest');

const publicPath = '/';

module.exports = {
  stats: 'errors-only',
  mode: 'development',
  target: 'web',
  entry: ['webpack-hot-middleware/client', './client'],
  output: {
    path: path.join(__dirname, 'dist'),
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
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackBar(),
    new WebpackAssetsManifest(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    noEmitOnErrors: true,
    moduleIds: 'hashed',
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
