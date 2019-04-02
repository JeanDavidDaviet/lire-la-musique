import scale from './scales';

const getChord = (currentScale, rootOrFourthOrFifth, minorOrMajor) => {
  const rootID = scale.ids[currentScale];
  const rff = [
    rootID,
    scale.fourth[rootID],
    scale.fifth[rootID]
  ];
  let chord = rff[rootOrFourthOrFifth];
  chord = minorOrMajor ? scale.minor[chord] : chord;

  const displayMajorName = scale.displayName[chord];
  const displayMajorLatin = scale.displayLatin[chord];

  const displayName = minorOrMajor ? displayMajorName + 'm' : displayMajorName;
  const displayLatin = minorOrMajor ? displayMajorLatin + 'm' : displayMajorLatin;

  const chords = minorOrMajor ? scale.chords.minor[chord] : scale.chords.major[chord];

  return {
    chord,
    chords,
    displayName,
    displayLatin,
    currentScale,
    rootOrFourthOrFifth,
    minorOrMajor
  }
}

export default getChord;