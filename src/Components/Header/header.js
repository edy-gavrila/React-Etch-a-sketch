import React from "react";
import Navbar from "./Navbar/navbar";

const header = (props) => {
  return <Navbar showModalHandler={props.showModal} />;
};

export default header;
