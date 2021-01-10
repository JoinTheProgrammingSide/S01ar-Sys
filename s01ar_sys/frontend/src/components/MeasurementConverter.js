import React, { Component } from "react";
import { render } from "react-dom";

export default class MeasurementConversionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromUnit: "",
      toUnit: "",
      amount: 1,
      result: "0",
    };

    this.handleCalculate = this.handleCalculate.bind(this);
    this.handleFromUnitChange = this.handleFromUnitChange.bind(this);
    this.handleToUnitChange = this.handleToUnitChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
  }

  handleFromUnitChange(e) {
    this.setState({
      fromUnit: e.target.value,
    });
  }

  handleToUnitChange(e) {
    this.setState({
      toUnit: e.target.value,
    });
  }

  handleAmountChange(e) {
    this.setState({
      amount: e.target.value,
    });
  }

  handleCalculate() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from_unit: this.state.fromUnit,
        to_unit: this.state.toUnit,
        amount: this.state.amount,
      }),
    };
    fetch("api/measurement-convert", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ result: data.amount }));
  }

  render() {
    return (
      <div>
        <div id="main">
          <h1>Measurement Conversion</h1>

          <div id="form-container">
            <form>
              <p>Initial Unit</p>
              <input
                type="text"
                onChange={this.handleFromUnitChange}
                name="from-unit"
                placeholder="ex: cm, m, mL, L"
              />
              <p>Final Unit</p>
              <input
                type="text"
                onChange={this.handleToUnitChange}
                name="to-unit"
                placeholder="ex: cm, m, mL, L"
              />
              <p>Amount</p>
              <input
                type="text"
                onChange={this.handleAmountChange}
                name="amount"
                placeholder="ex: 100"
              />
              <br />
              <button type="button" onClick={this.handleCalculate}>
                Calculate
              </button>
            </form>
          </div>
          <div id="result">
            <h3>Output:</h3>
            <h2>
              {this.state.result == ""
                ? "Error"
                : this.state.result + this.state.toUnit}
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
