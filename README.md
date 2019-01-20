# Example App using React Hot Loader

The documentation for all aspects of `react-hot-loader` and Hot Module Replacement (HMR) across the web is out-of-date, misleading, and confusing. As with any aspect of Node configuration, it only gets more painful as you add features and capabilities to your runtime.

I found no example of a setup that is up-to-date with Babel 7, Webpack 4+, and React 16.7. This example uses the latest versions of Webpack, Babel, React, et al, and the configuration works with SSR in development and production. Configuration files live in the `./webpack` folder. I have aimed to provide the least amount of configuration possible to support Hot-reloading. That being said, it takes a LOT of configuration to make all of this work.

## Install

```bash
yarn
```

## Development with Hot-reloading of React components

```bash
yarn dev
```

## Production
```bash
yarn prod
```

Your server will run at `http://localhost:3000`.
