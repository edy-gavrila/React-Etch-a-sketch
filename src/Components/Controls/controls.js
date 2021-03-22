import React from 'react';
import classes from "./controls.module.css"

const controls = () => {

  return (
    <div className = {classes.ControlsContainer}>
      <div className = {`${classes.Grayscale} ${classes.ColorSchemeContainer}`}>
      </div>
      <div className = {`${classes.ColorSchemeContainer}`}>
          <input type="color" className={classes.ColorInput}></input>
          <input type="color" className={classes.ColorInput}></input>
      </div>
      <div className = {`${classes.ColorSchemeContainer} ${classes.Rainbow}`}>
      </div>


 
    </div>
  );
}

export default controls;
