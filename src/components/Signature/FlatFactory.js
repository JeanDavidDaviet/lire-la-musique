import React from 'react';
import Flat from './Flat.js';
import flats from '../../flats.js';
import config from '../../config';

const pushFlatAlterationIntoArray = (numberOfFlats, alterationWidth) => {
  let flatsObjects = [];
  flats.forEach((value, index) => {
    if(index < numberOfFlats){
      flatsObjects.push(<Flat key={index} x={-290 + ( alterationWidth * index )} y={value} />)
    }
  })
  return flatsObjects;
}

const FlatFactory = ( { signatures, chosenScale } ) => {
  const alterationWidth = config.alterationWidth;
  const numberOfFlats = Object.keys(signatures.flats).indexOf(chosenScale);
  const flatsObjects = pushFlatAlterationIntoArray(numberOfFlats, alterationWidth);

  return Object.keys(signatures.flats).indexOf(chosenScale) > -1 ? flatsObjects : null;
}

export default FlatFactory;
