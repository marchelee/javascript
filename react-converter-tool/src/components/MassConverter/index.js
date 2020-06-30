import React, { Component } from 'react';
import './MassConverter.css';

class MassConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      convertedWeight: ''
    }
    this.updateWeightInput = this.updateWeightInput.bind(this);
    this.calculateWeight = this.calculateWeight.bind(this);
  }

  updateWeightInput(event) {
    this.setState({
      weight: event.target.value
    })
  }

  calculateWeight() {
    this.setState({
      convertedWeight: this.state.weight * 1000
    })
    // console.log('To Grams: ' + this.state.weight * 1000)
  }

  render() {
    return (
      <div>
        <h2>Mass Converter (KG)</h2>
        <input type="text" onChange={this.updateWeightInput}></input>
        <input type="submit" onClick={this.calculateWeight} ></input>
        <h2 type="text">{this.state.convertedWeight}</h2>
      </div>
    );
  }
}

export default MassConverter;