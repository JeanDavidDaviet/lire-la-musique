import React from 'react';
import { connect } from 'react-redux';
import config from '../../config';

const ChordName = ({ inter, latin, displayLatin }) => {
  const staveWidth = config.staveWidth;
  const MN_centerNote = config.MN_centerNote;
  const chordPosition = {
    transform: `translate3d( ${(staveWidth / 8) - MN_centerNote}px,-10px,0px)`
  };

  return <text style={chordPosition}>{displayLatin ? latin : inter}</text>;
}

const mapStateToProps = (state) => ({
  displayLatin: state.configReducer.displayLatin,
});

export default connect(
  mapStateToProps,
  null
)(ChordName);