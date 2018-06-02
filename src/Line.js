import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Line extends Component {
  render() {
    const x = this.props.x;
    const y = this.props.y;
    const width = this.props.width;
    const lineWidth = x + width;
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
        d={`M${x} ${y}L ${x + width} ${y}`}>
        {lineWidth}
      </path>
    );
  }
}

Line.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}
Line.defaultProps = {
  width: 200
}

export default Line;
