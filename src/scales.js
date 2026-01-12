const scales = {
  C: {
    M: 'C',
    m: 'Am',
  },
  G: {
    M: 'G',
    m: 'Em',
  },
  D: {
    M: 'D',
    m: 'Bbm',
  },
  A: {
    M: 'A',
    m: 'F#m',
  },
  E: {
    M: 'E',
    m: 'C#m',
  },
  B: {
    M: 'B',
    m: 'G#m',
  },
  Fs: {
    M: 'F#',
    m: 'Ebm',
  },
  Cs: {
    M: 'C#',
    m: 'G#m',
  },
  F: {
    M: 'F',
    m: 'Dm',
  },
  Bb: {
    M: 'Bb',
    m: 'Gm',
  },
  Eb: {
    M: 'Eb',
    m: 'Cm',
  },
  Ab: {
    M: 'Ab',
    m: 'Fm',
  },
  Db: {
    M: 'Db',
    m: 'Bbm',
  },
  Gb: {
    M: 'Gb',
    m: 'Ebm',
  },
  Cb: {
    M: 'Cb',
    m: 'G#m',
  },
};

// sharps
scales.C.prev = scales.F;
scales.C.next = scales.G;

scales.G.prev = scales.C;
scales.G.next = scales.D;

scales.D.prev = scales.G;
scales.D.next = scales.A;

scales.A.prev = scales.D;
scales.A.next = scales.E;

scales.E.prev = scales.A;
scales.E.next = scales.B;

scales.B.prev = scales.E;
scales.B.next = scales.Fs;

scales.Fs.prev = scales.B;
scales.Fs.next = scales.Cs;

scales.Cs.prev = scales.Fs;
scales.Cs.next = scales.Ab;

// flats
scales.F.prev = scales.Bb;
scales.F.next = scales.C;

scales.Bb.prev = scales.Eb;
scales.Bb.next = scales.F;

scales.Eb.prev = scales.Ab;
scales.Eb.next = scales.Bb;

scales.Ab.prev = scales.Db;
scales.Ab.next = scales.Eb;

scales.Db.prev = scales.Gb;
scales.Db.next = scales.Ab;

scales.Gb.prev = scales.B;
scales.Gb.next = scales.Db;

export default scales;

export const realScale = {
  ids: {
    C: 0,
    Cs: 1,
    Db: 2,
    D: 3,
    Ds: 4,
    Eb: 5,
    E: 6,
    Es: 7,
    Fb: 8,
    F: 9,
    Fs: 10,
    Gb: 11,
    G: 12,
    Gs: 13,
    Ab: 14,
    A: 15,
    As: 16,
    Bb: 17,
    B: 18,
    Bs: 19,
    Cb: 20,
  },
  displayName: [
    'C',
    'C#',
    'Db',
    'D',
    'D#',
    'Eb',
    'E',
    'E#',
    'Fb',
    'F',
    'F#',
    'Gb',
    'G',
    'G#',
    'Ab',
    'A',
    'A#',
    'Bb',
    'B',
    'B#',
    'Cb',
  ],
  minor: [15, 16, 17, 18, 0, 0, 1, 3, 1, 3, 4, 5, 6, 9, 9, 10, 12, 12, 13, 15, 13],
  staveYPosition: [0, 0, 5, 5, 5, 10, 10, 10, 15, 15, 15, 20, 20, 20, 25, 25, 25, 30, 30, 30, 35],
  fourth: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 0, 1, 2, 3, 4, 5, 6, 7, 8],
  fifth: [12, 13, 14, 15, 16, 17, 18, 19, 20, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
};

export const translatedScale = {
  A: 'La',
  B: 'Si',
  C: 'Do',
  D: 'Ré',
  E: 'Mi',
  F: 'Fa',
  G: 'Sol',
};

export const getTranslatedScaleFromLetter = (inputLetter, notation) => {
  return notation ? translatedScale[inputLetter.substr(0, 1)] + inputLetter.substr(1) : inputLetter;
};
