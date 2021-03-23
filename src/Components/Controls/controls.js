import React, { useState } from "react";

const Controls = (props) => {
  const [state, setState] = useState({
    idActive: "grayscale",
  });

  const setActive = (link) => {
    setState({ ...state, idActive: link });
  };

  return (
    <div className={`d-flex justify-content-center bg-success p-2`}>
      <ul className={`nav nav-pills flex-column flex-md-row `}>
        <li className={`nav-item`}>
          <button
            className={`nav-link text-white ${
              state.idActive === "grayscale" ? "active" : ""
            } `}
            onClick={() => setActive("grayscale")}
          >
            Grayscale
          </button>
        </li>

        <li className={`nav-item`}>
          <button
            className={`nav-link text-white ${
              state.idActive === "rainbow" ? "active" : ""
            } `}
            onClick={() => setActive("rainbow")}
          >
            Rainbow
          </button>
        </li>

        <li className={`nav-item`}>
          <button
            className={`nav-link text-white ${
              state.idActive === "bgColor" ? "active" : ""
            }`}
            onClick={() => setActive("bgColor")}
          >
            Background color
          </button>
        </li>

        <li className={`nav-item`}>
          <button
            className={`nav-link text-white ${
              state.idActive === "penColor" ? "active" : ""
            }`}
            onClick={() => setActive("penColor")}
          >
            Pen color
          </button>
        </li>

        <li className={`nav-item dropdown`}>
          <button
            className={`nav-link dropdown-toggle  text-white ${
              state.idActive === "gridSize" ? "active" : ""
            }`}
            data-bs-toggle="dropdown"
            onClick={() => setActive("gridSize")}
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
