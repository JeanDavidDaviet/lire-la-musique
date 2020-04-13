import React from 'react';
import StaveFactory from '../Stave/StaveFactory';
import StaveChordsFactory from '../Stave/StaveChordsFactory';
import Signature from '../Signature/Signature';
import signatures from '../../signatures.js';
import config from '../../config';

export const getWidthOfBackground = (chosenScale) => config.clefWidth + signatures.numberOfAlterations[chosenScale] * config.alterationWidth;

const Mesure = ({ chord, config, chosenScale, scale, numberOfAlterations, running, volume, tempo, sounds, instrument, clef, time, children }) => {
  const widthOfBackground = getWidthOfBackground(chosenScale);
  return (
    <svg>
      {chord ?
          <StaveChordsFactory
            config={config}
            chosenScale={chosenScale}
            scale={scale}
            running={running}
            volume={false}
            tempo={tempo}
            sounds={sounds}
            instrument={instrument}
            chord={chord}>
          </StaveChordsFactory>:
          <StaveFactory
            config={config}
            chosenScale={chosenScale}
            running={running}
            volume={volume}
            tempo={tempo}
            sounds={sounds}
            instrument={instrument}
            widthOfBackground={widthOfBackground}>
          </StaveFactory>}
          <Signature
            numberOfAlterations={numberOfAlterations}
            chosenScale={chosenScale}
            scale={scale}
            clef={clef}
            time={time} />
      {children}
    </svg>
  );
}

export default Mesure;
