import React, { Component } from "react";
import "./App.css";
import Calculator from "./components/Calculator";

class App extends Component {
  state = { userInput: "", numberArray: [] };

  handleChange = e => {
    this.setState({ userInput: e.target.value });
  };

  add = userInput => {
    const number = this.state.userInput;
    this.setState({
      numberArray: [...this.state.numberArray, number],
      userInput: ""
    });
  };

  render() {
    return (
      <Calculator
        onChange={this.handleChange}
        add={this.add}
        subtract={this.subtract}
        multiply={this.multiply}
        divide={this.divide}
        equals={this.equals}
      />
    );
  }
}

export default App;
