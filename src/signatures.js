const signatures = {
  sharps: {
    C: 0,
    G: 1,
    D: 2,
    A: 3,
    E: 4,
    B: 5,
    Fs: 6,
    Cs: 7
  },
  flats: {
    C: 0,
    F: 1,
    Bb: 2,
    Eb: 3,
    Ab: 4,
    Db: 5,
    Gb: 6,
    Cb: 7
  }
}

signatures.C = signatures.sharps.C;
signatures.G = signatures.sharps.G;
signatures.D = signatures.sharps.D;
signatures.A = signatures.sharps.A;
signatures.E = signatures.sharps.E;
signatures.B = signatures.sharps.B;
signatures.Fs = signatures.sharps.Fs;
signatures.Cs = signatures.sharps.Cs;

signatures.F = signatures.flats.F;
signatures.Bb = signatures.flats.Bb;
signatures.Eb = signatures.flats.Eb;
signatures.Ab = signatures.flats.Ab;
signatures.Db = signatures.flats.Db;
signatures.Gb = signatures.flats.Gb;
signatures.Cb = signatures.flats.Cb;

signatures.As = signatures.flats.Bb;
signatures.Ds = signatures.flats.Eb;
signatures.Gs = signatures.flats.Ab;

export default signatures