import React from "react";
import Logo from "../Logo/logo";
import classes from "./navbar.module.css";

const navbar = (props) => {
  return (
    <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <Logo />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="/">
              New sketch
            </a>
            <a
              className="nav-link"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                props.showModalHandler();
              }}
            >
              Save Sketch
            </a>
            <a className="nav-link" href="/">
              Load Sketch
            </a>
            <a className="nav-link" href="/">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
