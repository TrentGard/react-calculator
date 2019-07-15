import React from "react";

function Output(props) {
  return (
    <div className={props.className}>
      <span>{props.output}</span>
    </div>
  );
}

export default Output;
