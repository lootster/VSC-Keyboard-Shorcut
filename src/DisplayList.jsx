import React, { Component } from "react";
import DisplayItem from "./DisplayItem";
import InputKeyStrokes from "./InputKeyStrokes";

class DisplayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfKeys: this.props.keyStrokes,
      idCounter: 0,
      keyChecker: [false, false, false]
    };
  }

  checkValue = (id, event) => {
    console.log(event.keyCode);
    console.log(event.ctrlKey); 
      
    event.keyCode === this.state.listOfKeys[id].firstkeycode
      ? this.setState({
          idCounter: this.state.idCounter + 1
        })
      : console.log("Not matched");
  
  };

  render() {
    const { listOfKeys, idCounter } = this.state;
    const displayKeys = listOfKeys
      .filter(eachKey => {
        return eachKey.id === idCounter;
      })
      .map(key => <DisplayItem key={key.id} keyStrokeData={key} />);

    return (
      <div>
        <InputKeyStrokes checkValue={this.checkValue} id={idCounter} />
        <ul>{displayKeys}</ul>
      </div>
    );
  }
}

export default DisplayList;
