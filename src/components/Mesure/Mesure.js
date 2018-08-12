import React, { Component } from 'react';
import Stave from '../../components/Stave/Stave';
import Signature from '../../components/Signature/Signature';
import './Mesure.css';


class Mesure extends Component {
  constructor({config}){
    super();

    this.stavesNumber = Math.ceil(config.width / config.staveWidth) + 1;
    this.pixelsPerBeats = 100;
    this.bpm = 60;
    this.pixelsPerMillisecond = this.pixelsPerBeats / 1000;
    this.staves = [];
    this.canProcess = 0;
    this.marginLeft = 50;

    this.state = {
      x: 0,
      staveIndex: 0,
      transform: {
        transform:'translate3d(50px,50px,0)'
      }
    }
  }

  componentDidMount(){
    this.lastFrameAdd = Date.now();
    this.lastFrameRemove = Date.now();
    this.lastFrame = Date.now();
    for(let i = 0; i < this.stavesNumber; i++){
      this.staves.push(<Stave index={i} width={this.props.config.staveWidth} key={i} scale={this.props.scale}/>);
    }
    this.setState({staveIndex: this.stavesNumber});

    if(this.props.running){
     requestAnimationFrame(this.update);
    }
  }

  update = () => {
    requestAnimationFrame(this.update);
    if(this.state.x < -this.props.config.staveWidth - this.canProcess){
      this.canProcess += this.props.config.staveWidth;
      this.addStaves();
      this.removeStaves();
    }

    this.setState((prevState) => {
      return {
        // 0.1 * 16
        x: prevState.x - (this.pixelsPerMillisecond * ( Date.now() - this.lastFrame )).toFixed(1),
        transform: {
          transform: `translate3d(${this.state.x}px,50px,0)`
        }
      }
    });
    this.lastFrame = Date.now();

  }

  addStaves = () => {
    this.staves.push(<Stave index={this.state.staveIndex} width={this.props.config.staveWidth} key={this.state.staveIndex} scale={this.props.scale}/>);
    this.setState((previousState) => {return {staveIndex: previousState.staveIndex + 1}});
  }

  removeStaves = () => {
    this.staves.splice(0, 1);
  }

  render(){
    return (
      <svg>
        <Signature width={50}></Signature>
        <g className="mesure" style={this.state.transform}>
          { this.staves }
        </g>
      </svg>
    );
  }
}

export default Mesure;