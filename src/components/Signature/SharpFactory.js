import React from 'react';
import Sharp from './Sharp.js';
import sharps from '../../sharps.js';
import config from '../../config';

const getWidthOfBackground = (numberOfSharps) => {
  let widthOfBackground = 0;
  sharps.forEach((_, index) => {
    if(index < numberOfSharps){
      widthOfBackground++;
    }
  });
  return widthOfBackground;
}

const pushSharpAlterationIntoArray = (numberOfSharps, alterationWidth) => {
  let sharpsObjects = [];
  sharps.forEach((value, index) => {
    if(index < numberOfSharps){
      sharpsObjects.push(<Sharp key={index} x={-300 + ( alterationWidth * index )} y={value} />)
    }
  })
  return sharpsObjects;
}

const SharpFactory = ( { signatures, chosenScale } ) => {
  const clefWidth = config.clefWidth;
  const alterationWidth = config.alterationWidth;
  const numberOfSharps = Object.keys(signatures.sharps).indexOf(chosenScale);
  const sharpsObjects = pushSharpAlterationIntoArray(numberOfSharps, alterationWidth);
  const widthOfBackground = getWidthOfBackground(numberOfSharps);
  
  const background = <rect key="background" x="0" y="0" width={clefWidth + widthOfBackground * alterationWidth} height="150" fill="white" style={{transform: "translate3d(0, -50px, 0px)"}} />;
  const deadline = <path key="deadline" fill="none" stroke="red" d={`M ${clefWidth + widthOfBackground * alterationWidth} 0 L ${clefWidth + widthOfBackground * alterationWidth} 40`}></path>;
  return Object.keys(signatures.sharps).indexOf(chosenScale) > -1 ? [background, deadline, sharpsObjects] : null;
}

export default SharpFactory;
