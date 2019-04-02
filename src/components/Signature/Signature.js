import React from 'react';
import LineFactory from '../../components/Line/LineFactory';
import FlatFactory from './FlatFactory.js';
import SharpFactory from './SharpFactory.js';
import Treble from './Treble.js';
import Bass from './Bass.js';
import TimeSignature from './TimeSignature.js';
import config from '../../config';

const Signature = ({ signature, chosenScale, clef, time }) => (
  <g className={"signature"} height="150" style={{transform: `translate3d(0, 50px, 0px)`}}>
    <FlatFactory chosenScale={chosenScale} />
    <SharpFactory chosenScale={chosenScale} />
    <LineFactory staveWidth={signature * config.alterationWidth + config.clefWidth}/>
    <TimeSignature beats={parseInt(time, 10)} quarter={parseInt(time.substr(2), 10)} />
    {clef ? <Treble /> : <Bass />}
  </g>
)

export default Signature;