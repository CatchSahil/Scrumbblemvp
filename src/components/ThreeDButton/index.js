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
    <button
      className={
        "threedbutton threedbutton-blue threedbutton-block mt-4 is-clickable" +
        (state ? ` is-${state}` : "")
      }
      {...otherProps}
    >
      {props.children}
    </button>
  );
}

export default ThreeDButton;
