import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Line extends Component {
  constructor(props){
    super(props);
    this.x = props.x;
    this.y = props.y;
    this.width = props.width;
  }

  render() {
    return (
      <path
        strokeWidth="1"
        fill="none"
        stroke="#999999"
        strokeDasharray="none"
        fontFamily="Arial"
        fontSize="10pt"
        fontWeight="normal"
        fontStyle="normal"
        d={`M${this.x} ${this.y}L ${this.x + this.width} ${this.y}`}></path>
    );
  }
}

Line.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

export default Line;