import React from 'react';
import { hot } from 'react-hot-loader/root';
import Counter from './Counter';

const App = () => (
  <>
    <h1>Hello World: Hot Reload</h1>
    <p>
      <Counter />
    </p>
  </>
);

export default hot(App);
