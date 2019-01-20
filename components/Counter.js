import React from 'react';

class Counter extends React.Component {
  state = { count: 0 };

  componentDidMount() {
    this.interval = setInterval(() => this.setState(({ count }) => ({ count: count + 1 })), 200);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        Change this text, count will remain the same: <strong>{this.state.count}</strong>
      </>
    );
  }
}

export default Counter;
