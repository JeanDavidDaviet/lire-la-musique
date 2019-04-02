const scale = {
  ids: {
    "C": 0,
    "Cs": 1,
    "Db": 2,
    "D": 3,
    "Ds": 4,
    "Eb": 5,
    "E": 6,
    "Es": 7,
    "Fb": 8,
    "F": 9,
    "Fs": 10,
    "Gb": 11,
    "G": 12,
    "Gs": 13,
    "Ab": 14,
    "A": 15,
    "As": 16,
    "Bb": 17,
    "B": 18,
    "Bs": 19,
    "Cb": 20
  },
  displayName: [
    "C",
    "C#",
    "Db",
    "D",
    "D#",
    "Eb",
    "E",
    "E#",
    "Fb",
    "F",
    "F#",
    "Gb",
    "G",
    "G#",
    "Ab",
    "A",
    "A#",
    "Bb",
    "B",
    "B#",
    "Cb"
  ],
  displayLatin: [
    "Do",
    "Do#",
    "Réb",
    "Ré",
    "Ré#",
    "Mib",
    "Mi",
    "Mi#",
    "Fab",
    "Fa",
    "Fa#",
    "Solb",
    "Sol",
    "Sol#",
    "Lab",
    "La",
    "La#",
    "Sib",
    "Si",
    "Si#",
    "Dob"
  ],
  minor: [
    15,
    16,
    17,
    18,
    0,
    0,
    1,
    3,
    1,
    3,
    4,
    5,
    6,
    9,
    9,
    10,
    12,
    12,
    13,
    15,
    13
  ],
  staveYPosition: [
    0,
    0,
    5,
    5,
    5,
    10,
    10,
    10,
    15,
    15,
    15,
    20,
    20,
    20,
    25,
    25,
    25,
    30,
    30,
    30,
    35
  ],
  fourth: [
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  fifth: [
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ],
  accidentals: [
    0,
    -5,
    -5,
    2,
    -3,
    -3,
    4,
    -1,
    4,
    -1,
    6,
    6,
    1,
    -4,
    -4,
    3,
    -2,
    -2,
    5,
    0,
    5
  ],
  chords: {
    major: {
      //C
      0: [
        [65, 50, 40],
        [50, 40, 30],
        [40, 30, 15],
        [30, 15, 5],
        [15, 5, -5],
      ],
      //Cs
      1: [
        [50, 35, 25],
      ],
      //D
      3: [
        [60, 45, 35],
        [45, 35, 25],
        [35, 25, 10],
        [25, 10, 0],
        [10, 0, -10],
      ],
      //E
      6: [
        [65, 55, 40],
        [55, 40, 30],
        [40, 30, 20],
        [30, 20, 5],
        [20, 5, -5],
      ],
      //F
      9: [
        [60, 50, 35],
        [50, 35, 25],
        [35, 25, 15],
        [25, 15, 0],
        [15, 0, -10],
      ],
      //G
      12: [
        [55, 45, 30],
        [45, 30, 20],
        [30, 20, 10],
        [20, 10, -5],
        [10, -5, -15]
      ],
      //A
      15: [
        [60, 50, 40],
        [50, 40, 25],
        [40, 25, 15],
        [25, 15, 5],
        [15, 5, -10],
      ],
      //B
      18: [
        [65, 55, 45],
        [55, 45, 35],
        [45, 35, 20],
        [35, 20, 10],
        [20, 10, 0],
      ]
    }
  }
};

scale.chords.major[20] = scale.chords.major[0];
scale.chords.major[2] = scale.chords.major[3];
scale.chords.major[5] = scale.chords.major[6];
scale.chords.major[8] = scale.chords.major[9];
scale.chords.major[11] = scale.chords.major[12];
scale.chords.major[14] = scale.chords.major[15];
scale.chords.major[17] = scale.chords.major[18];

scale.chords.major[4] = scale.chords.major[3];
scale.chords.major[7] = scale.chords.major[6];
scale.chords.major[10] = scale.chords.major[9];
scale.chords.major[13] = scale.chords.major[2];
scale.chords.major[16] = scale.chords.major[5];

scale.chords.minor = scale.chords.major;

scale.chords.minor.Cs = [
  [50, 40, 30],
]

export default scale;