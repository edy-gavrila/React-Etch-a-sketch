import React from "react";
import Navbar from "./Navbar/navbar";

const header = (props) => {
  return (
    <Navbar
      showSaveModalHandler={props.showSaveModal}
      showLoadModalHandler={props.showLoadModal}
    />
  );
};

export default header;
