import React from 'react';
import { connect } from 'react-redux';
import { realScale } from '../../scales';
import config from '../../config';

const Stave = ({ index, chosenScale, children, displayLatin }) => {
  const staveWidth = config.staveWidth;
  const MN_centerNote = config.MN_centerNote;
  const rootOrFifthOrFourth = Math.round(Math.random() * 2);
  const minorOrMajor = Math.round(Math.random());

  const currentScale = realScale.ids[chosenScale];
  const chords = [
    currentScale,
    realScale.fourth[currentScale],
    realScale.fifth[currentScale]
  ];

  const displayName = displayLatin ? 'displayLatin' : 'displayName';

  let chord = chords[rootOrFifthOrFourth];
  chord = minorOrMajor ? realScale[displayName][realScale.minor[chord]] + 'm' : realScale[displayName][chord];

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
  displayLatin: state.configReducer.displayLatin,
});

export default connect(
  mapStateToProps,
  null
)(Stave);