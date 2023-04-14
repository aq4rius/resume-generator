import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Experience from "./components/Experience";
import Education from "./components/Education";

class App extends Component {
  render() {
    return (
      <div id="container">
        <h1>React Resume Generator</h1>
        <div id="components">
          <GeneralInfo />
          <Experience />
          <Education />
          <div className="preview-buttons">
            <button id="button" className="no-print">
              Preview
            </button>
            <button
              id="button"
              className="no-print"
              onClick={() => {
                window.print();
              }}
            >
              Print to pdf
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
