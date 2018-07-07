import React, { Component } from 'react';
import './Note.css';

class Note extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <g className="note" style={{transform: 'translate3d(0,8,0)'}}>
        <g className="note__stem">
          <path fill="none" stroke="black" d="M 0 0 L 0 35"></path>
        </g>
        <g className="note__head">
          <ellipse cx="7" cy="2" rx="8" ry="5"></ellipse>
        </g>
      </g>
    );
  }
}
export default Note;