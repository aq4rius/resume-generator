import React, { Component } from "react";

export default class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      education: {
        institution: "",
        fieldOfFocus: "",
        dateFrom: "",
        dateTo: "",
      },
      allEducation: [],
    };
  }

  render() {
    return (
      <div className="education">
        <h3>Education</h3>
        <div id="added-education"></div>
        <form className="no-print">
          <div>
            <div>
              <label>Institution:</label>
              <input type="text"></input>
            </div>
            <div>
              <label>Field:</label>
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
          <button id="add-education" className="no-print" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}
