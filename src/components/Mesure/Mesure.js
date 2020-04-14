import React from 'react';
import StaveFactory from '../Stave/StaveFactory';
import StaveChordsFactory from '../Stave/StaveChordsFactory';
import Signature from '../Signature/Signature';
import signatures from '../../signatures.js';
import config from '../../config';

export const getWidthOfBackground = (chosenScale) => config.clefWidth + signatures.numberOfAlterations[chosenScale] * config.alterationWidth;

const Mesure = ({ chord, config, chosenScale, scale, numberOfAlterations, running, volume, tempo, sounds, instrument, notation, clef, time, children }) => {
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
            chord={chord}
            notation={notation}
            widthOfBackground={widthOfBackground}
            beatsPerStave={parseInt(time, 10)}>
          </StaveChordsFactory>:
          <StaveFactory
            config={config}
            chosenScale={chosenScale}
            running={running}
            volume={volume}
            tempo={tempo}
            sounds={sounds}
            instrument={instrument}
            notation={notation}
            widthOfBackground={widthOfBackground}
            beatsPerStave={parseInt(time, 10)}>
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
