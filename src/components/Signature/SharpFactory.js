import React from 'react';
import Sharp from './Sharp.js';
import sharps from '../../sharps.js';
import config from '../../config';

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
  const alterationWidth = config.alterationWidth;
  const numberOfSharps = Object.keys(signatures.sharps).indexOf(chosenScale);
  const sharpsObjects = pushSharpAlterationIntoArray(numberOfSharps, alterationWidth);

  return Object.keys(signatures.sharps).indexOf(chosenScale) > -1 ? sharpsObjects : null;
}

export default SharpFactory;
