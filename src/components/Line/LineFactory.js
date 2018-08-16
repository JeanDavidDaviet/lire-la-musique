import React from 'react';
import Line from '../../components/Line/Line';

const LineFactory = ( { staveWidth, marginTop } ) => {
  let lines = [];
  for(let i = 0; i < 5; i++){
    lines.push({
      key   : i,
      x     : 0,
      y     : i * marginTop,
      width : staveWidth,
    });
  }
  return lines.map(lineProps => <Line {...lineProps} />);
}

export default LineFactory;