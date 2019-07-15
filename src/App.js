import React, { Component } from "react";
import "./App.css";
import Calculator from "./components/Calculator";

class App extends Component {
  state = {
    output: "0",
    workingArray: [],
    startNewParam: false,
    shouldResolve: false,
    shouldReset: false,
    clearText: "AC"
  };

  handleNumberClick = e => {
    const { output, startNewParam, shouldReset } = this.state;
    if (shouldReset) {
      return this.setState({
        output: this.formatOutput(e.target.id),
        workingArray: [],
        shouldReset: false,
        shouldResolve: false,
        text: "",
        clearText: "C"
      });
    }
    if (startNewParam) {
      this.setState({
        output: this.formatOutput(e.target.id),
        startNewParam: false,
        shouldResolve: true,
        clearText: "C"
      });
    } else {
      let newState = output + e.target.id;
      newState = this.formatOutput(newState);
      this.setState({ output: newState, clearText: "C" });
    }
  };

  handleOperatorClick = e => {
    const { output } = this.state;
    this.setState({
      workingArray: [output, e.target.id],
      startNewParam: true,
      output: "0"
    });
  };

  formatOutput(str) {
    if (str === "0") return str;
    if (str[0] === "0") {
      return str.substring(1);
    } else {
      return str;
    }
  }

  equals = e => {
    const { output, workingArray } = this.state;
    const operater = workingArray[1];
    const param1 = parseFloat(workingArray[0]);
    const param2 = parseFloat(output);
    const param3 = workingArray[2] ? parseFloat(workingArray[2]) : undefined;
    let result;
    const first = param3 ? param2 : param1;
    const second = param3 || param2;
    switch (operater) {
      case "+":
        result = first + second;
        break;
      case "-":
        result = first - second;
        break;
      case "x":
        result = first * second;
        break;
      case "/":
        result = first / second;
        break;
      default:
        break;
    }
    let newArray;
    if (param3) {
      newArray = [result, operater, param3];
    } else {
      newArray = [...workingArray, output];
    }
    this.setState({
      output: result,
      workingArray: newArray,
      shouldReset: true
    });
  };

  clearLast = e => {
    this.setState({ clearText: "AC", output: "0" });
  };

  clearAll = e => {
    let { clearText } = this.state;
    if (clearText === "AC") {
      this.setState({
        output: "0",
        workingArray: [],
        startNewParam: false,
        shouldResolve: false,
        shouldReset: false,
        clearText: "AC"
      });
    } else {
      this.clearLast();
    }
  };

  render() {
    return (
      <Calculator
        handleOperatorClick={this.handleOperatorClick}
        handleNumberClick={this.handleNumberClick}
        output={this.state.output}
        onChange={this.handleChange}
        clearAll={this.clearAll}
        clearLast={this.clearLast}
        handleSubmit={this.equals}
        clearText={this.state.clearText}
      />
    );
  }
}

export default App;
