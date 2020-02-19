import React from "react";
import "./styles.scss";

function ThreeDButton(props) {
  const {
    parentColor,
    size,
    state,
    fullWidth,
    // Passed to button element
    ...otherProps
  } = props;

  return (
    <>
      <button
        className={
          "threedbutton button modal-button threedbutton-blue threedbutton-block mt-4 is-clickable" +
          (state ? ` is-${state}` : "")
        }
        {...otherProps}
      >
        {props.children}
      </button>
      <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p class="modal-card-title">Modal title</p>
            <button className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body"></section>
          <footer className="modal-card-foot">
            <button className="button is-success">Save changes</button>
            <button className="button">Cancel</button>
          </footer>
        </div>
      </div>
    </>
  );
}

export default ThreeDButton;
