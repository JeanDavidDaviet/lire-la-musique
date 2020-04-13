import React from 'react';
import StavesFactory from '../Stave/StaveFactory';
import StavesChordsFactory from '../Stave/StaveChordsFactory';
import Signature from '../Signature/Signature';

const Mesure = ({ chord, config, chosenScale, scale, signature, running, volume, tempo, sounds, instrument, clef, time, children }) => (
  <svg>
    {chord ?
        <StavesChordsFactory
          config={config}
          chosenScale={chosenScale}
          scale={scale}
          signature={signature}
          running={running}
          volume={false}
          tempo={tempo}
          sounds={sounds}
          instrument={instrument}
          chord={chord}>
        </StavesChordsFactory>:
        <StavesFactory
          config={config}
          chosenScale={chosenScale}
          signature={signature}
          running={running}
          volume={volume}
          tempo={tempo}
          sounds={sounds}
          instrument={instrument}>
        </StavesFactory>}
        <Signature
          signature={signature}
          chosenScale={chosenScale}
          scale={scale}
          clef={clef}
          time={time} />
    {children}
  </svg>
)

export default Mesure;
