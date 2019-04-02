import React from 'react';
import { realScale } from "../../scales";
import { connect } from 'react-redux';
import config from '../../config';

const ChordName = ({ chosenScale, rootOrFifthOrFourth, minorOrMajor, displayLatin }) => {
  const staveWidth = config.staveWidth;
  const MN_centerNote = config.MN_centerNote;
  const chordPosition = {
    transform: `translate3d( ${(staveWidth / 8) - MN_centerNote}px,-10px,0px)`
  };

  const currentScale = realScale.ids[chosenScale];
  const chords = [
    currentScale,
    realScale.fourth[currentScale],
    realScale.fifth[currentScale]
  ];

  const displayName = displayLatin ? 'displayLatin' : 'displayName';

  let chord = chords[rootOrFifthOrFourth];
  return <text style={chordPosition}>{minorOrMajor ? realScale[displayName][realScale.minor[chord]] + 'm' : realScale[displayName][chord] + ''}</text>;
}

const mapStateToProps = (state, props) => ({
  chosenScale: props.chosenScale,
  rootOrFifthOrFourth: props.rootOrFifthOrFourth,
  minorOrMajor: props.minorOrMajor,
  displayLatin: state.configReducer.displayLatin,
});

export default connect(
  mapStateToProps,
  null
)(ChordName);