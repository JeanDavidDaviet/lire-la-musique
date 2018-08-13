import React from 'react';
import Sharp from './Sharp.js';
import sharps from '../../sharps.js';

const SharpFactory = ( { signature, chosenScale } ) => {
  const numberOfSharps = Object.keys(signature.sharps).indexOf(chosenScale);
  let sharpsObjects = [];
  let widthOfBackground = 0;
  sharps.map((value, index) => {
    if(index < numberOfSharps){
      sharpsObjects.push(<Sharp key={index} x={-330 + ( 15 * index )} y={value} />)
      widthOfBackground++;
    }
  })
  const background = <rect key="background" x="0" y="0" width={35 + widthOfBackground * 15} height="150" fill="white" style={{transform: "translate3d(0, -50px, 0px)"}} />;
  return Object.keys(signature.sharps).indexOf(chosenScale) > -1 ? [background, sharpsObjects] : null;
}

export default SharpFactory;