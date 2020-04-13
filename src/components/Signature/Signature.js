import React from 'react';
import LineFactory from '../../components/Line/LineFactory';
import FlatFactory from './FlatFactory.js';
import SharpFactory from './SharpFactory.js';
import Treble from './Treble.js';
import Bass from './Bass.js';
import TimeSignature from './TimeSignature.js';
import signatures from '../../signatures.js';
import config from '../../config';

const Signature = ({ numberOfAlterations, chosenScale, clef, time }) => (
  <g className={"signature"} height="150" style={{transform: `translate3d(0, 50px, 0px)`}}>
    <FlatFactory signatures={signatures} chosenScale={chosenScale} />
    <SharpFactory signatures={signatures} chosenScale={chosenScale} />
    <LineFactory staveWidth={numberOfAlterations * config.alterationWidth + config.clefWidth}/>
    <TimeSignature beats={parseInt(time, 10)} quarter={parseInt(time.substr(2), 10)} />
    {clef ? <Treble /> : <Bass />}
  </g>
)

export default Signature;
