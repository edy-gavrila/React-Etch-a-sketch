import React from "react";
import Cell from "../Cell/cell";
import classes from "./sketchpad.module.css";

const sketchpad = (props) => {
  const grid = props.pixelData.map((pixel, idx) => (
    <Cell
      setColor={props.setColor}
      size={props.size}
      bgColour={pixel}
      keys={idx}
      key={idx}
      onMouseDown={props.mouseDown}
    />
  ));

  return (
    <div className={`d-flex justify-content-center ${classes.SketchContainer}`}>
      <div
        className={`border border-info border-2 rounded-3 mt-4 mb-4 bg-white ${classes.Sketchpad}`}
        onMouseUp={props.mouseUp}
      >
        {grid}
      </div>
    </div>
  );
};

export default sketchpad;
