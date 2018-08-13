import React from 'react';
import Flat from './Flat.js';
import flats from '../../flats.js';

const FlatFactory = ( { signature, chosenScale } ) => {
  const numberOfFlats = Object.keys(signature.flats).indexOf(chosenScale);
  let flatsObjects = [];
  let widthOfBackground = 0;
  flats.map((value, index) => {
    if(index < numberOfFlats){
      flatsObjects.push(<Flat key={index} x={-320 + ( 15 * index )} y={value} />)
      widthOfBackground++;
    }
  })
  const background = <rect key="background" x="0" y="0" width={35 + widthOfBackground * 15} height="150" fill="white" style={{transform: "translate3d(0, -50px, 0px)"}} />;
  return Object.keys(signature.flats).indexOf(chosenScale) > -1 ? [background, flatsObjects] : null;
}

export default FlatFactory;