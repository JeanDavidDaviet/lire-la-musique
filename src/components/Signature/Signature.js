import React from 'react';
import LineFactory from '../../components/Line/LineFactory';
import AlterationFactory from './AlterationFactory.js';
import Treble from './Treble.js';
import Bass from './Bass.js';
import TimeSignature from './TimeSignature.js';
import signatures from '../../signatures.js';
import config from '../../config';
import Deadline from './Deadline';

const Signature = ({ numberOfAlterations, chosenScale, clef, time }) => (
  <g className={'signature'} height="150" style={{ transform: `translate3d(0, 50px, 0px)` }}>
    <Deadline chosenScale={chosenScale} />
    <LineFactory staveWidth={numberOfAlterations * config.alterationWidth + config.clefWidth} />
    {clef ? <Treble /> : <Bass />}
    <TimeSignature beats={parseInt(time, 10)} quarter={parseInt(time.substr(2), 10)} />
    <AlterationFactory signatures={signatures} chosenScale={chosenScale} />
  </g>
);

export default Signature;
