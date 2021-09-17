import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.tasks}</div>;
  }
}

export default Overview;
