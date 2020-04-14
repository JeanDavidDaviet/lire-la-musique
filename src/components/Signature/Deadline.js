import React from 'react';
import { getWidthOfBackground } from '../Mesure/Mesure';

const Deadline = ( { chosenScale } ) => {
  const widthOfBackground = getWidthOfBackground(chosenScale);
  return <React.Fragment>
    <rect key="background" x="0" y="0" width={widthOfBackground} height="150" fill="white" style={{transform: "translate3d(0, -50px, 0px)"}} />;
    <path key="deadline" fill="none" stroke="red" d={`M ${widthOfBackground} 0 L ${widthOfBackground} 40`}></path>;
  </React.Fragment>
}

export default Deadline;
