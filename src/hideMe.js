import React from "react";

class HideMe extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Hide Me"
    };
  }

  hidden = () => {
    this.setState({
      title: ""
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>

        <button onClick={this.hidden}>Hide ME</button>
      </div>
    );
  }
}
export default HideMe;
