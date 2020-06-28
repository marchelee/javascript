import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import ResultComponent from './components/ResultComponent';
import KeyComponent from './components/KeypadComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: ""
    }
  }

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "Invalid"
      });
    }
  };

  reset = () => {
    this.setState({
      result: ""
    });
  }

  delete = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  }

  onClickhandler = symbol => {
    if (symbol === "=") {
      this.calculate();
    } else if (symbol === "C") {
      this.reset();
    } else if (symbol === "CE") {
      this.delete();
    } else {
      this.setState({
        result: this.state.result + symbol
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h5>React Calculator</h5>
        </header>
        <div className="calculator-wrapper">
          <div className="visible-wrapper">
            <ResultComponent result={this.state.result} />
            <KeyComponent onClickhandler={this.onClickhandler} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
