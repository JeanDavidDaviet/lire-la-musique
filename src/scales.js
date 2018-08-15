const scales = {
  C: {
    M: "C",
    m: "Am",
  },
  G: {
    M: "G",
    m: "Em",
  },
  D: {
    M: "D",
    m: "Bbm",
  },
  A: {
    M: "A",
    m: "F#m",
  },
  E: {
    M: "E",
    m: "C#m",
  },
  B: {
    M: "B",
    m: "G#m",
  },
  Fs: {
    M: "F#",
    m: "Ebm",
  },
  Cs: {
    M: "C#",
    m: "G#m",
  },
  F: {
    M: "F",
    m: "Dm",
  },
  Bb: {
    M: "Bb",
    m: "Gm",
  },
  Eb: {
    M: "Eb",
    m: "Cm",
  },
  Ab: {
    M: "Ab",
    m: "Fm",
  },
  Db: {
    M: "Db",
    m: "Bbm",
  },
  Gb: {
    M: "Gb",
    m: "Ebm",
  },
  Cb: {
    M: "Cb",
    m: "G#m",
  }
}

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

export default scales