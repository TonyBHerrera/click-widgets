import React, { Component } from "react";
import "./styles.css";
import { render } from "react-dom";
import Clock from "./time";
import Counter from "./counter";
import HideMe from "./hideMe";
import ChangeSize from "./changeSize";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Clock />
        </div>
        <div>
          <Counter />
        </div>
        <div>
          <HideMe />
        </div>
        <div>
          <ChangeSize />
        </div>
      </div>
    );
  }
}
