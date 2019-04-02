import { realScale } from "./scales";
import { realChords } from "./chords";

const getChord = (currentScale, rootOrFourthOrFifth, minorOrMajor) => {
  const rootID = realScale.ids[currentScale];
  const rff = [
    rootID,
    realScale.fourth[rootID],
    realScale.fifth[rootID]
  ];
  let chord = rff[rootOrFourthOrFifth];
  chord = minorOrMajor ? realScale.minor[chord] : chord;

  const displayMajorName = realScale.displayName[chord];
  const displayMajorLatin = realScale.displayLatin[chord];

  const displayName = minorOrMajor ? displayMajorName + 'm' : displayMajorName;
  const displayLatin = minorOrMajor ? displayMajorLatin + 'm' : displayMajorLatin;

  const chords = minorOrMajor ? realChords.minor[chord] : realChords.major[chord];

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