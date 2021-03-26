import React from "react";
import classes from "./loadForm.module.css";

const loadForm = (props) => {
  const drawingNames = JSON.parse(localStorage.getItem("drawingNames"));
  let items = null;
  if (drawingNames) {
    items = drawingNames.map((name, idx) => <option key={idx}>{name}</option>);
  }
  let drawingName;

  const loadClickHandle = (e) => {
    e.preventDefault();
    if (drawingName) {
      props.loadDrawingHandler(drawingName);
      props.hideModal();
    }
  };

  return (
    <div className={classes.LoadForm}>
      <div className={`${classes.Header} bg-success`}>
        Select a drawing to load
        <i className="fas fa-times" onClick={props.hideModal}></i>
      </div>
      <div className={classes.LoadContainer}>
        <select
          size="10"
          onChange={(e) => {
            drawingName = e.target.value;
          }}
        >
          {items}
        </select>
        <button className={`btn btn-success mx-auto`} onClick={loadClickHandle}>
          Load drawing
        </button>
      </div>
    </div>
  );
};

export default loadForm;
