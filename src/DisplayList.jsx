import React, { Component } from 'react';

class DisplayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyStrokes: this.props.keyStrokes,
    };
  }

  render() {

    const { keyStrokes } = this.state;
    const displayKeys = keyStrokes.map(eachKey => {
      return (
        <div>
          {eachKey.id}
          {eachKey.task}
          {eachKey.firstkey}
          {eachKey.thirdkey}
          {eachKey.alternatekey} 
        </div>
      );
    })


    return (
      <div>
        {displayKeys}
      </div>
    );
  }
}

export default DisplayList;