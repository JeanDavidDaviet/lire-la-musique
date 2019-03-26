import React from 'react';
import { chords } from '../../chords';
import NoteChords from './NoteChords';

const NoteChordsFactory = ( { staveWidth, staveHeight, marginTop, chord } ) => {
  const MN_centerNote = 6;
  let notes = [];

  for(let i = 0; i < 4; i++){
    const random = Math.floor(Math.random() * chords[chord].length);
    for(let j = 0; j < 3; j++){
      notes.push({
        x  : (i * staveWidth / 4) + (staveWidth / 8) - MN_centerNote,
        y : chords[chord][random][j],
        marginTop: marginTop,
        staveHeight: staveHeight,
        key: i + '' + j,
        isUpOrDown: chords[chord][random][2] > 20
      });
    }
  }

  return notes.map(noteProps => <NoteChords {...noteProps} />);
}

export default NoteChordsFactory;