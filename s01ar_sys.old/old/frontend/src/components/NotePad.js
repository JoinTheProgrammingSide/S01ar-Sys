import React, { Component } from "react";
import { render } from "react-dom";

export default class NotePadPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      message: "",
      notes: {},
      runCount: 0,
    };

    this.renderNotes = this.renderNotes.bind(this);
  }

  renderNotes() {
    if (this.state.runCount <= 0) {
      this.setState({ runCount: 1 });
    } else {
      return;
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "get",
      }),
    };

    // var notes = {};
    var i;

    fetch("api/note-pad", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        for (i = 0; i < data.length; i++) {
          this.setState({
            notes: [
              <div class="note">
                <h2>{data[0]["title"]}</h2>
                <p>{data[0]["message"]}</p>
              </div>,
            ],
          });
        }
      });
    console.log(this.state.notes);
    return this.state.notes;

    // console.log(notes);
    // console.log(notes);
    // console.log(notes);

    // function renderThem(notes) {
    //   console.log(notes);
    //   console.log(notes[0]["title"]);
    //   console.log(notes.length);
    //   for (i = 0; i <= notes.length; i++) {
    //     console.log(i);
    //     // return (
    //     //   <div class="note">
    //     //     <h2>{notes[i]["title"]}</h2>
    //     //     <p>{notes[i]["message"]}</p>
    //     //   </div>
    //     // );
    //   }
    //   this.setState({ test: <h2>Hello</h2> });
    // }

    // return this.test;
  }

  render() {
    return (
      <div id="main">
        <h1>Note Pad</h1>

        <div id="notes">
          <div class="note">
            <h2>Create a Note</h2>
            <button>Create</button>
          </div>
          {this.renderNotes()}
        </div>
      </div>
    );
  }
}
