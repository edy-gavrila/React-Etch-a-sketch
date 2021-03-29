import React from "react";

const cell = (props) => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        height: `${props.cellSize}px`,
        width: `${props.cellSize}px`,
        backgroundColor: `${props.bgColour}`,
      }}
      className={`border border-light`}
      onMouseEnter={(e) => props.setColor(props.keys)}
      onMouseDown={(e) => props.onMouseDown(e, props.keys)}
    ></div>
  );
};

export default cell;
