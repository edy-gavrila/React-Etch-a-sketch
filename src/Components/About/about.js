import React from "react";
import classes from "./about.module.css";

const about = (props) => {
  return (
    <div className={classes.About}>
      <div className={`${classes.Header} bg-success`}>About Etch-a-sketch</div>
      <div className={`mt-4 ${classes.Content}`}>
          <h4>ETCH-A-SKETCH by Eduard Gavrila</h4>
          <p >This App is built using React</p>
          <p>It is meant to be a learning project and do, it is far from perfect. If you came across it and have something to suggest about it, I can be found on twitter at <a href="https://twitter.com/eduard_gavrila" target="__blank">@eduard_gavrila</a>.</p>
          </div>
      <button className={`btn btn-success px-5`} onClick={props.hideModal}>
        CLOSE
      </button>
    </div>
  );
};

export default about;
