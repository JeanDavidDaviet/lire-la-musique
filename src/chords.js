const chords = {
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

chords.major[20] = chords.major[0];
chords.major[2] = chords.major[3];
chords.major[5] = chords.major[6];
chords.major[8] = chords.major[9];
chords.major[11] = chords.major[12];
chords.major[14] = chords.major[15];
chords.major[17] = chords.major[18];

chords.major[4] = chords.major[3];
chords.major[7] = chords.major[6];
chords.major[10] = chords.major[9];
chords.major[13] = chords.major[2];
chords.major[16] = chords.major[5];

chords.minor = chords.major;

chords.minor.Cs = [
  [50, 40, 30],
]

export default chords;