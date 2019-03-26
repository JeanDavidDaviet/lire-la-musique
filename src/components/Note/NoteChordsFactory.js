import React from 'react';
import { chords } from '../../chords';
import NoteChords from './NoteChords';
import config from '../../config';

const NoteChordsFactory = ( { chord } ) => {
  const MN_centerNote = config.MN_centerNote;
  const staveWidth = config.staveWidth;
  let notes = [];

  for(let i = 0; i < 4; i++){
    const random = Math.floor(Math.random() * chords[chord].length);
    for(let j = 0; j < 3; j++){
      notes.push({
        x  : (i * staveWidth / 4) + (staveWidth / 8) - MN_centerNote,
        y : chords[chord][random][j],
        key: i + '' + j,
        isUpOrDown: chords[chord][random][2] > 20
      });
    }
  }

  return notes.map(noteProps => <NoteChords {...noteProps} />);
}

export default NoteChordsFactory;