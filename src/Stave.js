import React, { Component } from 'react';
import './Stave.css';
import Line from './Line';

class Stave extends Component {
  constructor(){
    super();

    this.state = {
      x: 0,
      transform: {
        transform:'translate3d(0,0,0)'
      }
    }

    this.lines = [];
    for(let i = 0; i < 5; i++){
      this.lines.push(<Line key={i} x={0} y={i * 10} />);
    }
  }

  componentDidMount(){
    requestAnimationFrame(this.update);
  }

  update = () => {
    requestAnimationFrame(this.update);
    this.setState((prevState) => {
      return {
        x: prevState.x - 1,
        transform: {
          transform: `translate3d(${this.state.x}px,0,0)`
        }
      }
    });
  }

  render() {

    return (
      <svg>
          <g style={this.state.transform}>
            { this.lines }
          </g>
      </svg>
    );
  }
}

export default Stave;
