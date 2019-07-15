import React from "react";
import Button from "./Button";
import Output from "./Output";

function Calculator(props) {
  return (
    <div className="calculator">
      <Output output={props.output} className="calculator-screen" />
      <div className="calculator-keys">
        <Button text={props.clearText} onClick={props.clearAll} />
        <Button text="+/-" />
        <Button text="%" />
        <Button
          text="/"
          onClick={props.handleOperatorClick}
          className="right-column"
        />
        <Button text="7" onClick={props.handleNumberClick} />
        <Button text="8" onClick={props.handleNumberClick} />
        <Button text="9" onClick={props.handleNumberClick} />
        <Button
          text="x"
          onClick={props.handleOperatorClick}
          className="right-column"
        />
        <Button text="4" onClick={props.handleNumberClick} />
        <Button text="5" onClick={props.handleNumberClick} />
        <Button text="6" onClick={props.handleNumberClick} />
        <Button
          text="-"
          onClick={props.handleOperatorClick}
          className="right-column"
        />
        <Button text="1" onClick={props.handleNumberClick} />
        <Button text="2" onClick={props.handleNumberClick} />
        <Button text="3" onClick={props.handleNumberClick} />
        <Button
          text="+"
          onClick={props.handleOperatorClick}
          className="right-column"
        />
        <Button
          text="0"
          onClick={props.handleNumberClick}
          className="zero-button"
        />
        <Button text="." />
        <Button
          text="="
          onClick={props.handleSubmit}
          className="right-column"
        />
      </div>
    </div>
  );
}

export default Calculator;
