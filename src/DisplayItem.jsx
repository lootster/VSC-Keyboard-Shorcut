import React from 'react';
import "./DisplayItem.css";

const DisplayItem = (props) => {
  const { id, task, firstkey, secondkey, thirdkey, alternatekey} = props;

  return (
    <div className="wrapper">
      <div>{id}</div>
      <div>{task}</div>

      <div>{firstkey}</div>
      <div>{secondkey}</div>
      <div>{thirdkey}</div>
      <div>{alternatekey}</div>
      
    </div>
  );
}

export default DisplayItem;
