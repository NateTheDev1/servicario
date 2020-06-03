import React, { useState } from "react";

const Modal = (props) => {
  const [isActive, setIsActive] = useState(false);

  const changeModalState = (modalState) => setIsActive(modalState);

  return (
    <div>
      <button
        onClick={() => changeModalState(true)}
        type="button"
        className="button is-medium is-info is-outlined"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        {props.openButtonText || "Open"}
      </button>
      <div className={`modal ${isActive ? "is-active" : ""}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Make a Deal</p>
            <button
              className="delete"
              aria-label="close"
              onClick={() => changeModalState(false)}
            ></button>
          </header>
          <section className="modal-card-body">{props.children}</section>
          <footer className="modal-card-foot">
            <button onClick={props.onModalSubmit} className="button is-success">
              Save changes
            </button>
            <button className="button" onClick={() => changeModalState(false)}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Modal;