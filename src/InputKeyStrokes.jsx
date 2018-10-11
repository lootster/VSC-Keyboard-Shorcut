import React, { Component } from 'react';

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
      <form>
        <input
          type="text"
          placeholder="Please input a key"
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
