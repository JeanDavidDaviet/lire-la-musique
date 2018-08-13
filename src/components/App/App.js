import React, { Component } from 'react';
import config from '../../config.js';
import scales from '../../scales.js';
import signatures from '../../signatures.js';
import Mesure from '../Mesure/Mesure';

export class App extends Component {
  constructor(){
    super();
    this.state = {
      chosenScale: "C"
    };
  }
  render() {
    return (
      <React.Fragment>
        <select value={this.state.chosenScale} onChange={(event) => {this.setState({chosenScale:  event.target.value})}}>
          {Object.keys(scales).sort().map((value, index) => {
            return <option key={index} value={value}>{scales[value].M}</option>
          })}
        </select>
        <Mesure
        config={config}
        chosenScale={this.state.chosenScale}
        scale={scales[this.state.chosenScale]}
        signature={signatures[this.state.chosenScale]}
        running={true}/>
      </React.Fragment>
    );
  }
}

export default App;