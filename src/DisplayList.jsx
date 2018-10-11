import React, { Component } from "react";
import DisplayItem from "./DisplayItem"
import InputKeyStrokes from "./InputKeyStrokes"

class DisplayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyStrokes: this.props.keyStrokes
    };
  }

  render() {
    const { keyStrokes } = this.state;
    const displayKeys = keyStrokes.map(eachKeyStrokes => {
      return (
        <div>
          <DisplayItem
          id={eachKeyStrokes.id}
          task={eachKeyStrokes.task}
          firstkey={eachKeyStrokes.firstkey}
          secondkey={eachKeyStrokes.secondkey}
          thirdkey={eachKeyStrokes.thirdkey}
          alternatekey={eachKeyStrokes.alternatekey}
          />
        </div>
      );
    });

    return (
      <div>
        <p>
          <InputKeyStrokes />
        </p>
        <ul>{displayKeys}</ul>
      </div>
    );
  }
}

export default DisplayList;
