import React from 'react';
import Note from '../../components/Note/Note';
import config from '../../config';

const NoteFactory = ({ chord }) => {
  const MN_centerNote = config.MN_centerNote;
  const staveWidth = config.staveWidth;
  let notes = [];
  for(let i = 0; i < 4; i++){
    notes.push({
      x  : (i * staveWidth / 4) + (staveWidth / 8) - MN_centerNote,
      key: i,
      index: i,
    });
  }

  return notes.map(noteProps => <Note {...noteProps} />);
}

export default NoteFactory;