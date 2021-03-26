import React from "react";
import classes from "./backdrop.module.css";

const backdrop = (props) => {
  return (
    <div className={classes.Backdrop} hidden={props.hidden}>
      {props.children}
    </div>
  );
};

export default backdrop;
