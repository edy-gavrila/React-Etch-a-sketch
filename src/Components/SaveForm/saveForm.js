import React from "react";
import classes from "./saveForm.module.css";

const saveForm = (props) => {
  const checkDrawingName = (input) => {
    if (input.length < 3) {
      return false;
    }
    const regex = /[^A-Za-z0-9]+/g;
    const valid = input.match(regex);
    if (!valid) {
      return true;
    }
    return false;
  };

  const showWarning = () => {
    const message = document.getElementById("warningMessage");
    message.hidden = false;
  };
  const hideWarning = () => {
    const message = document.getElementById("warningMessage");
    message.hidden = true;
  };

  const saveClickHandle = (e) => {
    const input = document.getElementById("filename").value;

    e.preventDefault();

    if (!checkDrawingName(input)) {
      showWarning();
    } else {
      hideWarning();

      props.saveToLocalStorage(input);
      props.hideModal();
    }
  };

  return (
    <div className={classes.SaveForm}>
      <div className={`${classes.Header} bg-success`}>
        Save Drawing
        <i className="fas fa-times" onClick={props.hideModal}></i>
      </div>
      <form className="mt-4 ">
        <div className="row-auto mx-4 p-2">
          <label htmlFor="filename" className="form-label text-center">
            Drawing name:
          </label>
        </div>
        <div className="row mx-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              id="filename"
              min="3"
              placeholder="doddle"
            />
          </div>
          <div className="col-auto">
            <button
              className="btn btn-success d-block"
              type="submit"
              onClick={(e) => saveClickHandle(e)}
            >
              Save
            </button>
          </div>
        </div>
        <small className="ms-4 ps-1 text-danger" hidden id="warningMessage">
          Please enter a valid drawing name
        </small>
      </form>
    </div>
  );
};

export default saveForm;
