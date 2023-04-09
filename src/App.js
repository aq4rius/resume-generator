import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Experience from "./components/Experience";
import Education from "./components/Education";

class App extends Component {
  render() {
    return (
      <div id="container">
        <h1 className="no-print">React Resume Generator</h1>
        <div id="components" className="no-print">
          <GeneralInfo />
          <Experience />
          <Education />
        </div>
      </div>
    );
  }
}
export default App;
