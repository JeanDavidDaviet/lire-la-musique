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
    M: "Fs",
    m: "Ebm",
  },
  F: {
    M: "F",
    m: "Dm",
  }
}

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

export default scales