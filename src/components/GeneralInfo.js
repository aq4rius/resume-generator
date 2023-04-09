import React, { Component } from "react";

export default class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      isEditing: true,
    };
  }

  render() {
    return (
      <div>
        <h3>General Info</h3>
        {this.state.isEditing ? (
          <form id="general-info-edit" className="no-print">
            <div>
              <div>
                <label>First Name:</label>
                <input type="text"></input>
              </div>
              <div>
                <label>Last Name:</label>
                <input type="text"></input>
              </div>
            </div>
            <div>
              <div>
                <label>Email:</label>
                <input type="email"></input>
              </div>
              <div>
                <label>Phone:</label>
                <input type="number"></input>
              </div>
            </div>
            <div>
              <button id="add-education" className="no-print">
                Save
              </button>
            </div>
          </form>
        ) : (
          <div id="general-info-save">
            <button id="add-education" className="no-print">
              Edit
            </button>
          </div>
        )}
      </div>
    );
  }
}
