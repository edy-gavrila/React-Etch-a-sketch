import React from "react";

const footer = () => {
  return (
    <div className="container-fluid d-flex justify-content-end bg-dark">
      <ul className="nav">
        <li className="nav-link text-light">Copyright &copy; 2021 Eduard Gavrila</li>
        <li className="nav-link text-light">
          <a href="/"><i className="fab fa-2x fa-github"></i></a>
        </li>
      </ul>
    </div>
  );
};

export default footer;
