import React, { Component } from 'react';
import './InputKeyStrokes.css'

class InputKeyStrokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputKeys: "",
    }
  }

  onChangeHandler = event => {
    this.setState({
        inputKeys: event.target.value,
    });
  };

  render() {
    return (
      <form className="form">
        <input
          type="text"
          placeholder="Input keys combination"
          value={this.state.inputKeys}
          onChange={this.onChangeHandler}
        />
        <button
          onClick={event => {
            this.props.addNewTask(this.state.addToDo, event);
          }}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default InputKeyStrokes;
