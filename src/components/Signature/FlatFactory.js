import React from 'react';
import Flat from './Flat.js';
import flats from '../../flats.js';

const FlatFactory = ( { signature, chosenScale } ) => {
  const numberOfFlats = Object.keys(signature.flats).indexOf(chosenScale);
  let flatsObjects = [];
  flats.map((value, index) => {
    if(index < numberOfFlats){
      flatsObjects.push(<Flat x={-330 + ( 15 * index )} y={value} />)
    }
  })
  return Object.keys(signature.flats).indexOf(chosenScale) > -1 ? flatsObjects : 'null';
}

export default FlatFactory;