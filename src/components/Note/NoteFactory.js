import React from 'react';
import Note from '../../components/Note/Note';
import config from '../../config';
import { noise } from '../../perlin';
import { map_range } from '../../utils';


noise.seed(Math.random());
const clamped = false;
const marginTop = config.yIntervalBetweenNotes * 2;

// REMEMBER : for the "y" property
// less than 0 are higher on the score
// greater than 0 are higher on the score
const perlinDivider = clamped ? .025 : 3; 
const higherNote = clamped ? config.staveHeight : config.minNote;
const lowerNote = clamped ? 0 : config.maxNote;

// return a number between getRandomInt(higherNote, lowerNote) rounded to the nearest fifth
const getRandomFifth = () => {
  const rand = generateRandomNumberWithPerlin();
  return Math.ceil(rand / 5) * 5;
}

const generateRandomNumberWithPerlin = () => {
  window.perlinX = ++window.perlinX || 0;
  const perlin = noise.perlin2(window.perlinX / perlinDivider, 0.5);
  const remap_perlin_range = map_range(perlin, -1, 1, higherNote, lowerNote);
  return remap_perlin_range;
}

const NoteFactory = ({ beatsPerStave }) => {
  const MN_centerNote = config.MN_centerNote;
  const staveWidth = config.staveWidth;
  let notes = [];
  for(let i = 0; i < beatsPerStave; i++){
    let y = getRandomFifth();
    // prevent first note to overlap the chord name
    if(!i && y < marginTop){
      y = getRandomFifth();
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
