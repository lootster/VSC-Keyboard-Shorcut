import React, { Component } from "react";
import DisplayItem from "./DisplayItem";
import InputKeyStrokes from "./InputKeyStrokes";
// import KeyUpHandler from "./KeyUpHandler";

class DisplayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfKeys: this.props.keyStrokes,
      idCounter: 0
    };
  }

  keyHandling = (event) => {
    // Handle event
    console.log("Key code: " + event.keyCode);
    event.keyCode === this.state.listOfKeys[this.state.idCounter].firstkey.code
      ? this.setState({
          idCounter: this.state.idCounter + 1
        })
      : console.log("Not matched");
  }

  // checkValue = (id, event) => {
  //   console.log(event.keyCode);
    
  //   event.keyCode === this.state.listOfKeys[id].firstkey.code
  //     ? this.setState({
  //         idCounter: this.state.idCounter + 1
  //       })
  //     : console.log("Not matched");
  // };

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

        {/* <KeyUpHandler /> */}
      </div>
    );
  }
  
  
  componentDidMount () {
    // Add Event Listener on component mount
    window.addEventListener("keyup", this.keyHandling);
  }
  
  componentWillUnmount () {
    // Remove event listener on component unmount
    window.removeEventListener("keyup", this.keyHandling);
  }
}

export default DisplayList;
