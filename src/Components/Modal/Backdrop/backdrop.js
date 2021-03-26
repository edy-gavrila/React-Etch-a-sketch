import React from "react";
import classes from "./backdrop.module.css";

const backdrop = (props) => {
  return <div className={classes.Backdrop}>{props.children}</div>;
};

export default backdrop;
