import React from "react";
import "./styles.scss";

function GithubButton(props) {
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
        "button" +
        (state ? ` is-${state}` : "")
      }
      {...otherProps}
    >
      {props.children}
    </button>
  );
}

export default GithubButton;
