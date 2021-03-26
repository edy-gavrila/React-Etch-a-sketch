import React, { useState } from "react";

const Controls = (props) => {
  const [activeLink, setActiveLink] = useState("grayscale");

  return (
    <div className={`d-flex justify-content-center bg-success p-2`}>
      <ul className={`nav nav-pills flex-column flex-md-row `}>
        <li className={`nav-item`}>
          <button
            className={`nav-link text-white ${
              props.colourMode === "grayscale" ? "active" : ""
            } `}
            onClick={() => {
              props.setColorMode("grayscale");
            }}
          >
            Grayscale
          </button>
        </li>

        <li className={`nav-item`}>
          <button
            className={`nav-link text-white ${
              props.colourMode === "rainbow" ? "active" : ""
            } `}
            onClick={() => {
              props.setColorMode("rainbow");
            }}
          >
            Rainbow
          </button>
        </li>

        <li className={`nav-item dropdown`}>
          <button
            className={`nav-link text-white dropdown-toggle`}
            data-bs-toggle="dropdown"
          >
            Background
          </button>
          <ul className={`dropdown-menu`}>
            <li className={`dropdown-item`}>
              <input
                type="color"
                value={props.backgroundColour}
                onChange={(e) => {
                  props.setBgColour(e.target.value);
                  
                }}
              ></input>
            </li>
          </ul>
        </li>

        <li className={`nav-item dropdown`}>
          <button
            className={`nav-link text-white dropdown-toggle`}
            data-bs-toggle="dropdown"
          >
            Pen color
          </button>
          <ul className={`dropdown-menu`}>
            <li className={`dropdown-item`}>
              <input
                type="color"
                value={props.penColor}
                onChange={(e) => {
                  props.setPenColour(e.target.value);
                  setActiveLink("none");
                }}
              ></input>
            </li>
          </ul>
        </li>

        <li className={`nav-item dropdown`}>
          <button
            className={`nav-link dropdown-toggle  text-white`}
            data-bs-toggle="dropdown"
          >
            Grid Size - {props.size}x{props.size}
          </button>
          <ul className={`dropdown-menu`}>
            <li className={`dropdown-item`} onClick={() => props.setSize(16)}>
              16
            </li>
            <li className={`dropdown-item`} onClick={() => props.setSize(32)}>
              32
            </li>
            <li className={`dropdown-item`} onClick={() => props.setSize(64)}>
              64
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Controls;
