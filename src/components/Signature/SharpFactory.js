import React from 'react';
import Sharp from './Sharp.js';
import sharps from '../../sharps.js';
import config from '../../config';
import { realScale } from '../../scales.js';

const SharpFactory = ({ chosenScale }) => {
  const rootID = realScale.ids[chosenScale];
  const alterationsNumber = realScale.accidentals[rootID];
  const clefWidth = config.clefWidth;
  const alterationWidth = config.alterationWidth;

  let sharpsObjects = [];
  let widthOfBackground = 0;
  if (alterationsNumber > 0) {
    sharps.forEach((value, index) => {
      if (index < Math.abs(alterationsNumber)) {
        sharpsObjects.push(<Sharp key={index} x={-300 + ( alterationWidth * index )} y={value} />)
        widthOfBackground++;
      }
    })
  }
  const background = <rect key="background" x="0" y="0" width={clefWidth + widthOfBackground * alterationWidth} height="150" fill="white" style={{transform: "translate3d(0, -50px, 0px)"}} />;
  const deadline = <path key="deadline" fill="none" stroke="red" d={`M ${clefWidth + widthOfBackground * alterationWidth} 0 L ${clefWidth + widthOfBackground * alterationWidth} 40`}></path>;
  return alterationsNumber > 0 ? [background, deadline, sharpsObjects] : null;
}

export default SharpFactory;