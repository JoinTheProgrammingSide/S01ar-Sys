import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import MeasurementConverter from "./MeasurementConverter";
import NotePad from "./NotePad";

export default class RouterPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/measurement" component={MeasurementConverter} />
          <Route path="/note" component={NotePad} />
        </Switch>
      </Router>
    );
  }
}
