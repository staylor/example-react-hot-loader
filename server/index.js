import fs from 'fs';
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../components/App';
import template from './template';

const app = express();

let assets = {
  'vendor.js': 'vendor.js',
  'manifest.js': 'manifest.js',
  'main.js': 'main.js',
};

if (process.env.NODE_ENV === 'development') {
  const config = require('../webpack/dev.config');
  const compiler = webpack(config);
  const devMiddleware = require('webpack-dev-middleware');
  const hotMiddleware = require('webpack-hot-middleware');
  app.use(devMiddleware(compiler, config.devServer));
  app.use(hotMiddleware(compiler));

  app.use(express.static('build'));
} else {
  const assetJSON = fs.readFileSync(path.join(process.cwd(), 'build', 'manifest.json'));
  assets = JSON.parse(assetJSON);

  app.use('/static', express.static('build'));
}

app.get('/', (req, res) => {
  const html = renderToString(<App />);

  res.send(
    template({
      html,
      assets,
    })
  );
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});

process.on('SIGINT', process.exit);
process.on('SIGTERM', process.exit);
