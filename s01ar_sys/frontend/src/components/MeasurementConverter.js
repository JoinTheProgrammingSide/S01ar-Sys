import React, { Component } from "react";
import { render } from "react-dom";

export default class MeasurementConversionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from_unit = "",
            to_unit = "",
            amount = 1,
        };
    }

    render() {
        return (
            <h1>Worked!</h1>
        );
    }
}