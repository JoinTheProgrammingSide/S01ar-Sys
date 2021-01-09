import React, { Component } from "react";
import { render } from "react-dom";
import RouterPage from "./RouterPage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <RouterPage />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
