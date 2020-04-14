import React from 'react';
import Note from '../../components/Note/Note';
import config from '../../config';
import { noise } from '../../perlin copie';

const staveHeight = config.staveHeight;
const marginTop = config.yIntervalBetweenNotes * 2;

// REMEMBER : for the "y" property
// less than 0 are higher on the score
// greater than 0 are higher on the score
const higherNote = -20;
const lowerNote = 70;

const getRandomFifth = (x, min, max) => {
  // return a number between getRandomInt(higherNote, lowerNote) rounded to the nearest fifth
  return Math.ceil(getRandomInt(x, min, max) / 5) * 5;
}

const getRandomInt = (x, min, max) => {
  // console.log(noise.perlin2(x, Date.now()));
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const NoteFactory = ({ beatsPerStave }) => {
  const MN_centerNote = config.MN_centerNote;
  const staveWidth = config.staveWidth;
  let notes = [];
  for(let i = 0; i < beatsPerStave; i++){
    let y = getRandomFifth(i, 0, staveHeight);
    // prevent first note to overlap the chord name
    if(!i && y < marginTop){
      y = getRandomFifth(i, 0, staveHeight);
    }
    notes.push({
      x  : (i * staveWidth / beatsPerStave) + (staveWidth / 8) - MN_centerNote,
      y: y,
      key: i,
      index: i,
    });
  }

  return notes.map(noteProps => <Note {...noteProps} />);
}

export default NoteFactory;
