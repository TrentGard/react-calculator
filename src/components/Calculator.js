import React from "react";
import Button from "./Button";

function Calculator(props) {
  return (
    <div>
      <input type="number" onChange={props.onChange} />
      <Button text="+" onClick={props.add} />
      <Button text="-" onClick={props.subtract} />
      <Button text="x" onClick={props.multiply} />
      <Button text="/" onClick={props.divide} />
      <Button text="=" />
    </div>
  );
}

export default Calculator;
