import React, { Component } from 'react';
import Stave from '../../components/Stave/Stave';
import Signature from '../../components/Signature/Signature';
import './Mesure.css';


class Mesure extends Component {
  constructor(props){
    super(props);

    this.stavesNumber = Math.ceil(props.config.width / props.config.staveWidth) + 1;
    this.pixelsPerMillisecond = this.pixelsPerBeats / 1000;

    this.setTempo(props.tempo);

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

    this.test = 'test';
  }

  setTempo(tempo){
    let tempoMultiplicator = tempo / 60;

    this.pixelsPerBeats = this.props.config.xIntervalBetweenNotes * tempoMultiplicator;
    this.pixelsPerFrame = this.pixelsPerBeats / this.props.config.framesPerBeat;
  }

  componentDidMount(){
    this.lastFrameAdd = Date.now();
    this.lastFrameRemove = Date.now();
    this.lastFrame = Date.now();
    for(let i = 0; i < this.stavesNumber; i++){
      this.staves.push(<Stave index={i} width={this.props.config.staveWidth} key={i} scale={this.props.scale}/>);
    }
    this.setState({staveIndex: this.stavesNumber});

    this.update();
  }

  update = () => {
    requestAnimationFrame(this.update);
    if(this.props.running){
      if(this.state.x < -this.props.config.staveWidth - this.canProcess){
        this.canProcess += this.props.config.staveWidth;
        this.addStaves();
        this.removeStaves();
      }

      this.setState((prevState) => {
        return {
          // 0.1 * 16
          x: this.state.x - this.pixelsPerFrame,
          transform: {
            transform: `translate3d(${this.state.x}px,50px,0)`
          }
        }
      }, () => {
        this.test = Math.ceil((1000 / ( Date.now() - this.lastFrame )).toFixed(0)) + ' FPS';
      });
    }
    this.lastFrame = Date.now();
  }

  addStaves = () => {
    this.staves.push(<Stave index={this.state.staveIndex} width={this.props.config.staveWidth} key={this.state.staveIndex} scale={this.props.scale}/>);
    this.setState({staveIndex: this.state.staveIndex + 1});
  }

  removeStaves = () => {
    this.staves.splice(0, 1);
  }

  render(){
    this.setTempo(this.props.tempo);
    return (
      <React.Fragment>
        <p>{this.test}</p>
        <svg>
          <g className="mesure" style={this.state.transform}>
            { this.staves }
          </g>
          <Signature scale={this.props.scale} signature={this.props.signature} chosenScale={this.props.chosenScale} width={50}></Signature>
        </svg>
      </React.Fragment>
    );
  }
}

export default Mesure;