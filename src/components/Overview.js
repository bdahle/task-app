import React, { Component } from "react";

class Overview extends Component {
  render() {
    const taskItems = this.props.tasks.map((task) => <li>{task}</li>);

    return (
      <div>
        <ul>{taskItems}</ul>
      </div>
    );
  }
}

export default Overview;
