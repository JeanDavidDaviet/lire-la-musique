import React, { Component } from 'react';
import Stave from './Stave';
import './Mesure.css'

class Mesure extends Component {
  constructor(){
    super();

    this.state = {
      x: 0,
      transform: {
        transform:'translate3d(0,0,0)'
      }
    }
  }

  componentDidMount(){
    // requestAnimationFrame(this.update);
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

  render(){
    return (
      <svg>
        <g className="mesure" style={this.state.transform}>
          <Stave index={0} width={200}/>
        </g>
      </svg>
    );
  }
}

export default Mesure;