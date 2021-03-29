import React from "react";
import Cell from "../Cell/cell";
import classes from "./sketchpad.module.css";

const sketchpad = (props) => {
  const sketchSize = Math.min(props.portSize.width, props.portSize.height - 50);

  const cellSize = Math.round(sketchSize / props.size);

  const divSize = Math.max(sketchSize, cellSize * props.size);

  const grid = props.pixelData.map((pixel, idx) => (
    <Cell
      cellSize={cellSize}
      sketchSize={sketchSize}
      bgColour={pixel}
      keys={idx}
      key={idx}
      onMouseDown={props.mouseDown}
      setColor={props.setColor}
    />
  ));

  return (
    <div className={`d-flex justify-content-center ${classes.SketchContainer}`}>
      <div
        className={`my-3 ${classes.Sketchpad}`}
        style={{ height: `${divSize}px`, width: `${divSize}px` }}
        onMouseUp={props.mouseUp}
      >
        {grid}
      </div>
    </div>
  );
};

export default sketchpad;
