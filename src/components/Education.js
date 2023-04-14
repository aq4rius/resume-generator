import React, { Component } from "react";
import AddedEducation from "./AddedEducation";

export default class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      education: {
        institution: "",
        field: "",
        dateFrom: "",
        dateTo: "",
      },
      allEducation: [],
    };
  }

  handleInstitutionChange = (event) => {
    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        institution: event.target.value,
      },
    }));
  };
  handleFieldChange = (event) => {
    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        field: event.target.value,
      },
    }));
  };
  handleDateFromChange = (event) => {
    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        dateFrom: event.target.value,
      },
    }));
  };

  handleDateToChange = (event) => {
    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        dateTo: event.target.value,
      },
    }));
  };

  onSubmitEducation = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      allEducation: [...prevState.allEducation, prevState.education],
      education: {
        institution: "",
        field: "",
        dateFrom: "",
        dateTo: "",
      },
    }));
  };

  deleteEducation = (index) => {
    this.setState((prevState) => ({
      allEducation: prevState.allEducation.filter(
        (education, i) => i !== index
      ),
    }));
  };

  render() {
    return (
      <div className="education">
        <h3>Education</h3>
        <div id="added-education">
          <AddedEducation
            allEducation={this.state.allEducation}
            deleteEducation={this.deleteEducation}
          />
        </div>
        <form className="no-print" onSubmit={this.onSubmitEducation}>
          <div>
            <div>
              <label>Institution:</label>
              <input
                type="text"
                value={this.state.education.institution}
                onChange={this.handleInstitutionChange}
              ></input>
            </div>
            <div>
              <label>Field:</label>
              <input
                type="text"
                value={this.state.education.field}
                onChange={this.handleFieldChange}
              ></input>
            </div>
          </div>
          <div>
            <div>
              <label>From:</label>
              <input
                className="date"
                type="date"
                value={this.state.education.dateFrom}
                onChange={this.handleDateFromChange}
              ></input>
            </div>
            <div>
              <label>To:</label>
              <input
                className="date"
                type="date"
                value={this.state.education.dateTo}
                onChange={this.handleDateToChange}
              ></input>
            </div>
          </div>
          <button id="add-education" type="submit" className="no-print">
            Save
          </button>
        </form>
      </div>
    );
  }
}
