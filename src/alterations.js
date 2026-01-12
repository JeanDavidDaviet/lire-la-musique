import SharpFactory from './components/Signature/SharpFactory';
import FlatFactory from './components/Signature/FlatFactory';

const alterations = {
  C: () => null,
  G: SharpFactory,
  D: SharpFactory,
  A: SharpFactory,
  E: SharpFactory,
  B: SharpFactory,
  Fs: SharpFactory,
  Cs: SharpFactory,
  F: FlatFactory,
  Bb: FlatFactory,
  Eb: FlatFactory,
  Ab: FlatFactory,
  Db: FlatFactory,
  Gb: FlatFactory,
  Cb: FlatFactory,
};

export default alterations;
