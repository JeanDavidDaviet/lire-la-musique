import React from 'react';
import { connect } from 'react-redux';
import { realScale } from '../../scales';

const Stave = ({ index, staveWidth, MN_centerNote, children, chosenScale }) => {
  const rootOrFifthOrFourth = Math.round(Math.random() * 2);
  const minorOrMajor = Math.round(Math.random());

  const currentScale = realScale.ids[chosenScale];
  const chords = [
    currentScale,
    realScale.fourth[currentScale],
    realScale.fifth[currentScale]
  ];

  let chord = chords[rootOrFifthOrFourth];
  chord = minorOrMajor ? realScale.displayName[realScale.minor[chord]] + 'm' : realScale.displayName[chord];

  let decalage = {
    transform: `translate3d( ${ index * staveWidth }px, 0, 0)`
  };
  const chordPosition = {
    transform: `translate3d( ${ (staveWidth / 8) - MN_centerNote}px,-10px,0px)`
  };

  return (
    <g className="stave" style={decalage}>
      <text style={chordPosition}>{ chord }</text>
      { children }
      <path fill="none" stroke="black" d={`M ${staveWidth} 0 L ${staveWidth} 40`}></path>
    </g>
  );
}



const mapStateToProps = (state) => ({
  chosenScale: state.scaleReducer.chosenScale,
});

export default connect(
  mapStateToProps,
  null
)(Stave);