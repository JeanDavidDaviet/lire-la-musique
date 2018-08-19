import React from 'react';
import LineFactory from '../../components/Line/LineFactory';
import FlatFactory from './FlatFactory.js';
import SharpFactory from './SharpFactory.js';
import Treble from './Treble.js';
import Bass from './Bass.js';
import signatures from '../../signatures.js';

const Signature = ({ config, scale, signature, chosenScale, clef }) => {
  return (
    <g className={"signature"} height="150" style={{transform: "translate3d(0, 50px, 0px)"}}>
      <FlatFactory scale={scale} signature={signatures} chosenScale={chosenScale} />
      <SharpFactory scale={scale} signature={signatures} chosenScale={chosenScale} />
      <LineFactory staveWidth={signature * config.alterationWidth + config.clefWidth} marginTop={config.yIntervalBetweenNotes * 2} />
      {clef ? <Treble /> : <Bass />}
    </g>
  )
}

export default Signature;