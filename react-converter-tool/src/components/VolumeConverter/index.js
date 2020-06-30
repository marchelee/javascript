import React, { Component } from 'react';
import './VolumeConverter.css';

class VolumeConverter extends Component {
  constructor(props) {
    super();
    this.state = {
      volume: '',
      convertedVolume: ''
    }
    this.updateVolumeInput = this.updateVolumeInput.bind(this);
    this.calculateVolume = this.calculateVolume.bind(this);
  }

  updateVolumeInput(event) {
    this.setState({
      volume: event.target.value
    })
  }

  calculateVolume() {
    this.setState({
      convertedVolume: this.state.volume * 1000
    })
    console.log('To Mililiters: ' + this.state.volume * 1000)
  }

  render() {
    return (
      <div>
        <h2>Volume Converter (L)</h2>
        <input type="text" onChange={this.updateVolumeInput}></input>
        <input type="submit" onClick={this.calculateVolume}></input>
        <h2>{this.state.convertedVolume}</h2>
      </div>
    );
  }
}

export default VolumeConverter;