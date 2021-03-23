import React from "react";

const cell = (props) => {
  return (
    <div
      style={{
        height: `${Math.floor(640 / props.size)}px`,
        width: `${Math.floor(640 / props.size)}px`,
        backgroundColor: `${props.bgColour}`,
      }}
      className={`border border-primary`}
      onMouseEnter={() => props.setColor(props.keys)}
      onMouseDown = {(e) => props.onMouseDown(e,props.keys)}
    >
    </div>
  );
};

export default cell;
