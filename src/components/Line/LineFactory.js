import React from 'react';
import Line from '../../components/Line/Line';
import config from '../../config';

const LineFactory = ({ staveWidth }) => {
  staveWidth = staveWidth || config.staveWidth;
  const marginTop = config.yIntervalBetweenNotes * 2;
  const lines = [];
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