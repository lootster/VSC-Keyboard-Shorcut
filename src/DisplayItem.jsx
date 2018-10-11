import React from "react";
import "./DisplayItem.css";

const DisplayItem = ({
  keyStrokeData: { id, task, firstkey: { symbol, code}, secondkey, thirdkey, alternatekey }
}) => {
  return (
    <div className="wrapper">
      <div>Key ID: {id}</div>
      <div>{task}</div>
      <div>{symbol}</div>
      <div>{secondkey}</div>
      <div>{thirdkey}</div>
      <div>{alternatekey}</div>
    </div>
  );
};

export default DisplayItem;
