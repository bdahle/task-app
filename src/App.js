import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };

    this.inputRef = React.createRef();
    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    this.inputRef.current.value = "";
    this.setState({
      tasks: [...this.state.tasks, task],
    });
  }

  render() {
    return (
      <div>
        <input ref={this.inputRef}></input>
        <button
          type="button"
          onClick={() => this.addTask(this.inputRef.current.value)}
        >
          Submit
        </button>
        <Overview tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
