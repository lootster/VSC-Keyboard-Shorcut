import React, { Component } from 'react';

class KeyUpHandler extends Component {
  render() {
    return (
      <div>
        Key monitoring in progress!
      </div>
    );
  }

  keyHandling = (e) => {
    // Handle event
    console.log("Key code: " + e.keyCode);
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

export default KeyUpHandler;
