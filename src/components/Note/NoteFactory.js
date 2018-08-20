import React from 'react';
import Note from '../../components/Note/Note';

const NoteFactory = ( { staveWidth, staveHeight, marginTop, sounds } ) => {
  const MN_centerNote = 6;
  let notes = [];
  for(let i = 0; i < 4; i++){
    notes.push({
      x  : (i * staveWidth / 4) + (staveWidth / 8) - MN_centerNote,
      marginTop: marginTop,
      staveHeight: staveHeight,
      key: i,
      index: i,
      sounds: sounds
    });
  }

  return notes.map(noteProps => <Note {...noteProps} />);
}

export default NoteFactory;