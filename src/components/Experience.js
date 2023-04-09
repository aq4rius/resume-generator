import React, { Component } from "react";

export default class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experience: {
        company: {
          text: "",
        },
        position: {
          text: "",
        },
        dateFrom: {
          text: "",
        },
        dateTo: {
          text: "",
        },
        tasks: {
          text: "",
        },
      },
      allExperience: [],
    };
  }

  render() {
    return (
      <div className="experience" id="">
        <h3>Experience</h3>
        <div id="added-experience"></div>
        <form className="no-print">
          <div>
            <div>
              <label>Company:</label>
              <input type="text"></input>
            </div>
            <div>
              <label>Position:</label>
              <input type="text"></input>
            </div>
          </div>
          <div>
            <div>
              <label>From:</label>
              <input className="date" type="date"></input>
            </div>
            <div>
              <label>To:</label>
              <input className="date" type="date"></input>
            </div>
          </div>
          <div>
            <div>
              <label>Tasks:</label>
              <textarea type="text"></textarea>
            </div>
          </div>
          <button className="no-print" id="add-experience" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}
