import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };

    this.addTask = this.addTask.bind(this);
  }

  addTask() {
    this.setState({
      tasks: ["fgesge", "eskgmesk"],
    });
  }

  render() {
    return (
      <div>
        <input></input>
        <button type="submit" onClick={this.addTask}>
          Submit
        </button>
        <Overview tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
