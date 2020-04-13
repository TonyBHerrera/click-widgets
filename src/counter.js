import React from "react";

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  handleCrementer = increment => {
    this.setState({
      count: this.state.count + increment
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.handleCrementer(1)}>add</button>
        <button onClick={() => this.handleCrementer(-1)}>sub</button>
      </div>
    );
  }
}

export default Counter;
