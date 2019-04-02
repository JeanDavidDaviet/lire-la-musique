import React from 'react';
import Flat from './Flat.js';
import flats from '../../flats.js';
import config from '../../config';
import scale from '../../scales.js';

const FlatFactory = ( { chosenScale } ) => {
  const rootID = scale.ids[chosenScale];
  const alterationsNumber = scale.accidentals[rootID];
  const clefWidth = config.clefWidth;
  const alterationWidth = config.alterationWidth;

  let flatsObjects = [];
  let widthOfBackground = 0;
  if (alterationsNumber < 0){
    flats.forEach((value, index) => {
      if (index < Math.abs(alterationsNumber)) {
        flatsObjects.push(<Flat key={index} x={-290 + ( alterationWidth * index )} y={value} />)
        widthOfBackground++;
      }
    })
  }
  const background = <rect key="background" x="0" y="0" width={clefWidth + widthOfBackground * alterationWidth} height="150" fill="white" style={{transform: "translate3d(0, -50px, 0px)"}} />;
  const deadline = <path key="deadline" fill="none" stroke="red" d={`M ${clefWidth + widthOfBackground * alterationWidth} 0 L ${clefWidth + widthOfBackground * alterationWidth} 40`}></path>;
  return alterationsNumber < 0 ? [background, deadline, flatsObjects] : null;
}

export default FlatFactory;