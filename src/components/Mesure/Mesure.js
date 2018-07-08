import React, { Component } from 'react';
import Stave from '../../components/Stave/Stave';
import './Mesure.css';


class Mesure extends Component {
  constructor(props){
    super();

    this.stavesNumber = Math.ceil(props.config.width / props.config.staveWidth) * 2;
    this.pixelsPerBeats = 100;
    this.bpm = 60;
    this.pixelsPerMillisecond = this.pixelsPerBeats / 1000;
    this.interval = 10;
    this.staves = [];

    this.state = {
      x: 0,
      transform: {
        transform:'translate3d(0,50px,0)'
      },
      numberOfStaves: 0
    }
  }

  componentDidMount(){
    this.lastTime = Date.now();
    this.lastFrame = Date.now();
    this.addStaves();
    // requestAnimationFrame(this.update);
  }

  update = () => {
    requestAnimationFrame(this.update);
    if(Date.now() - this.interval * 1000 > this.lastTime){
      this.lastTime = Date.now();
      this.addStaves();
      this.removeStaves();
    }


    // if(Date.now() - 16 > this.lastFrame){
    //   this.lastFrame = Date.now();
      this.setState((prevState) => {
        return {
          x: prevState.x - (this.pixelsPerMillisecond * ( Date.now() - this.lastFrame )).toFixed(1),
          transform: {
            transform: `translate3d(${this.state.x}px,50px,0)`
          }
        }
      });
    // }
    this.lastFrame = Date.now();

  }

  addStaves = () => {
    const alreadyExistingStaves = this.state.numberOfStaves;
    for(let i = alreadyExistingStaves; i < alreadyExistingStaves + this.stavesNumber; i++){
      this.staves.push(<Stave index={i} width={this.props.config.staveWidth} key={i} scale={this.props.scale}/>);
    }
    this.setState({numberOfStaves:alreadyExistingStaves + this.stavesNumber});
  }

  removeStaves = () => {
    if(this.staves.length / 2 > this.stavesNumber){
      this.staves.splice(0, this.stavesNumber);
      this.setState((previousState) => { return {numberOfStaves: previousState.numberOfStaves - this.stavesNumber}});
    }
  }

  render(){
    return (
      <svg>
        <g className="mesure" style={this.state.transform}>
          { this.staves }
        </g>
      </svg>
    );
  }
}

export default Mesure;