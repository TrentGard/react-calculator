import React from "react";

function Button(props) {
  return (
    <button
      // type="button"
      id={props.text}
      onClick={props.onClick}
      className={props.className}
    >
      {props.text}
    </button>
  );
}

export default Button;
