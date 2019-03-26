import React from 'react';
import Flat from './Flat.js';
import flats from '../../flats.js';
import config from '../../config';

const FlatFactory = ( { signature, chosenScale } ) => {
  const clefWidth = config.clefWidth;
  const alterationWidth = config.alterationWidth;
  const numberOfFlats = Object.keys(signature.flats).indexOf(chosenScale);
  let flatsObjects = [];
  let widthOfBackground = 0;
  flats.forEach((value, index) => {
    if(index < numberOfFlats){
      flatsObjects.push(<Flat key={index} x={-290 + ( alterationWidth * index )} y={value} />)
      widthOfBackground++;
    }
  })
  const background = <rect key="background" x="0" y="0" width={clefWidth + widthOfBackground * alterationWidth} height="150" fill="white" style={{transform: "translate3d(0, -50px, 0px)"}} />;
  const deadline = <path key="deadline" fill="none" stroke="red" d={`M ${clefWidth + widthOfBackground * alterationWidth} 0 L ${clefWidth + widthOfBackground * alterationWidth} 40`}></path>;
  return Object.keys(signature.flats).indexOf(chosenScale) > -1 ? [background, deadline, flatsObjects] : null;
}

export default FlatFactory;