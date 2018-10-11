import React, { Component } from "react";
import "./App.css";
import { keyStrokes } from "./KeyStrokesData";
import DisplayList from "./DisplayList";

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <DisplayList keyStrokes={ keyStrokes }/>
      </div>
    );
  }
}

export default App;
