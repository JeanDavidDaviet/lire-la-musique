import React from 'react';
import Sharp from './Sharp.js';
import sharps from '../../sharps.js';

const SharpFactory = ( { signature, chosenScale, clefWidth, alterationWidth } ) => {
  const numberOfSharps = Object.keys(signature.sharps).indexOf(chosenScale);
  let sharpsObjects = [];
  let widthOfBackground = 0;
  sharps.forEach((value, index) => {
    if(index < numberOfSharps){
      sharpsObjects.push(<Sharp key={index} x={-300 + ( alterationWidth * index )} y={value} />)
      widthOfBackground++;
    }
  })
  const background = <rect key="background" x="0" y="0" width={clefWidth + widthOfBackground * alterationWidth} height="150" fill="white" style={{transform: "translate3d(0, -50px, 0px)"}} />;
  const deadline = <path key="deadline" fill="none" stroke="red" d={`M ${clefWidth + widthOfBackground * alterationWidth} 0 L ${clefWidth + widthOfBackground * alterationWidth} 40`}></path>;
  return Object.keys(signature.sharps).indexOf(chosenScale) > -1 ? [background, deadline, sharpsObjects] : null;
}

export default SharpFactory;