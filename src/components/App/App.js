import React, { Component } from 'react';
import config from '../../config.js';
import scales from '../../scales.js';
import signatures from '../../signatures.js';
import Mesure from '../Mesure/Mesure';

export class App extends Component {
  constructor(){
    super();
    this.state = {
      chosenScale: "C",
      running: true
    };
    this.escFunction = this.escFunction.bind(this);
  }
  escFunction(event){
    if(event.keyCode == 32){
      this.setState({running: !this.state.running});
    }
  }
  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
  }
  render() {
    return (
      <React.Fragment>
        <div onKeyDown={(event) => {
          alert(event.key + ' pressed');
        }}>
          <select value={this.state.chosenScale} onChange={(event) => {this.setState({chosenScale:  event.target.value})}}>
            {Object.keys(scales).sort().map((value, index) => {
              return <option key={index} value={value}>{scales[value].M}</option>
            })}
          </select>
          <label><input checked={this.state.running} type="checkbox" value={this.state.running} onChange={() => {this.setState({running: !this.state.running})}}/>Running</label>
        </div>
        <Mesure
        config={config}
        chosenScale={this.state.chosenScale}
        scale={scales[this.state.chosenScale]}
        signature={signatures[this.state.chosenScale]}
        running={this.state.running}/>
      </React.Fragment>
    );
  }
}

export default App;