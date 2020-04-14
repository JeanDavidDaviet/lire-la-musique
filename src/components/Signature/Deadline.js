import React from 'react';
import { getWidthOfBackground } from '../Mesure/Mesure';

const Deadline = ( { chosenScale } ) => {
  const widthOfBackground = getWidthOfBackground(chosenScale);
  return <path key="deadline" fill="none" stroke="red" d={`M ${widthOfBackground} 0 L ${widthOfBackground} 40`}></path>;
}

export default Deadline;
