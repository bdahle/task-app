import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input></input>
        <button type="submit">Submit</button>
        <Overview text="fesef" />
      </div>
    );
  }
}

export default App;
