import React from 'react';
import Sharp from './Sharp.js';
import sharps from '../../sharps.js';

const SharpFactory = ( { signature, chosenScale } ) => {
  const numberOfSharps = Object.keys(signature.sharps).indexOf(chosenScale);
  let sharpsObjects = [];
  sharps.map((value, index) => {
    if(index < numberOfSharps){
      sharpsObjects.push(<Sharp x={-330 + ( 15 * index )} y={value} />)
    }
  })
  return Object.keys(signature.sharps).indexOf(chosenScale) > -1 ? sharpsObjects : 'null';
}

export default SharpFactory;