import React, { Component } from 'react';
import Line from '../../components/Line/Line';
import FlatFactory from './FlatFactory.js';
import SharpFactory from './SharpFactory.js';
import signatures from '../../signatures.js';

class Signature extends Component {
  constructor(props){
    super(props);

    let marginTop = 10;
    let width = props.width;

    this.lines = [];
    for(let i = 0; i < 5; i++){
      this.lines.push(
        <Line
          key   = { i }
          x     = { 0 }
          y     = { i * marginTop }
          width = { width }
        />
      );
    }
  }

  render() {
    return (
      <g className={"signature"} height="150" style={{transform: "translate3d(0, 50px, 0px)"}}>
        <FlatFactory scale={this.props.scale} signature={signatures} chosenScale={this.props.chosenScale} />
        <SharpFactory scale={this.props.scale} signature={signatures} chosenScale={this.props.chosenScale} />
        { this.lines }
        <g className="clef" style={{transform: "translate3d(10px, -83px, 0px) rotateZ(10deg)"}}><path strokeWidth="0.3" fill="black" stroke="none" strokeDasharray="none" fontFamily="Arial" fontSize="10pt" fontWeight="normal" fontStyle="normal" x="410" y="79.5" width="1" height="41" d="M29.054000000000002 66.82900000000001c.058-.029.116-.029.202-.029.346 0 .749.288 1.325 1.008 2.333 2.678 3.974 7.344 3.974 11.146 0 .288-.057.518-.057.806-.26 4.522-2.103 8.237-5.76 11.75l-.98.95-.345.375v.115l.201.864.317 1.556.317 1.44c.432 1.958.605 2.966.605 2.966s.115 0 .259-.029c.144 0 .605-.057 1.094-.057.346 0 .692.057.864.057 4.061.519 7.2 3.427 8.093 7.517.173.662.23 1.382.23 2.102 0 3.888-2.332 7.604-6.22 9.36-.23.144-.317.173-.317.173v.029s.173.662.317 1.411l.432 2.189.403 1.757c.23 1.123.346 1.93.346 2.65 0 .633-.087 1.209-.23 1.871-.98 4.004-4.465 6.394-8.094 6.394-1.785 0-3.628-.576-5.241-1.872-1.44-1.21-2.074-2.304-2.074-3.744 0-2.534 2.045-4.32 4.176-4.32.749 0 1.498.23 2.218.662a4.005 4.005 0 0 1 1.757 3.341c0 1.901-1.325 3.773-3.6 3.917h-.23l.172.115c.95.403 1.9.605 2.822.605 2.333 0 4.522-1.18 5.847-3.226a7.12 7.12 0 0 0 1.152-3.859c0-.518-.087-1.037-.202-1.613 0-.057-.086-.518-.201-.95-.634-3.11-1.008-4.925-1.008-4.925-.058 0-.173 0-.26.058-.288.057-.892.201-1.152.23-.633.087-1.238.115-1.814.115-5.645 0-10.886-3.801-12.7-9.417-.462-1.498-.72-2.995-.72-4.493 0-2.995.95-5.933 2.793-8.554 2.016-2.85 4.032-5.299 6.509-7.833l.864-.893-.202-1.066-.374-1.756-.49-2.247c-.144-.835-.317-1.641-.346-1.814-.144-.95-.23-1.872-.23-2.823 0-3.628 1.18-7.113 3.398-9.907.663-.864 1.844-2.016 2.16-2.102m1.757 5.702h-.23c-1.181 0-2.707 1.095-3.744 2.707-1.066 1.584-1.613 3.687-1.613 5.847 0 .576.029 1.18.115 1.785.087.432.115.72.346 1.757l.403 1.815c.115.547.202.979.202 1.036.028 0 .921-.979 1.21-1.324 2.88-3.255 4.607-6.682 4.982-9.706.028-.288.028-.518.028-.806 0-.893-.115-1.757-.316-2.218-.23-.46-.75-.835-1.383-.893m-4.349 22.263c-.057-.404-.144-.72-.144-.778h-.028c-.058 0-1.296 1.44-2.16 2.448-1.47 1.786-3.024 3.917-3.658 4.954a12.91 12.91 0 0 0-1.814 6.566c0 1.469.288 2.88.806 4.234 1.555 4.003 5.126 6.508 9.014 6.508.461 0 .98-.028 1.47-.115.633-.115 1.41-.345 1.41-.432 0 0-.057-.288-.144-.605l-.835-4.118-.662-3.082-.432-2.13-.461-2.074c-.23-1.239-.317-1.556-.317-1.556s0-.028-.029-.028c-.172 0-1.094.46-1.497.748a5.231 5.231 0 0 0-2.275 4.292c0 1.526.748 3.052 2.188 3.945.317.202.432.375.432.576v.144c-.057.346-.259.49-.547.49a.967.967 0 0 1-.432-.115c-2.65-1.152-4.435-3.888-4.435-6.884 0-3.456 2.16-6.45 5.472-7.632l.173-.057-.288-1.44-.807-3.86m4.32 9.62c-.23-.029-.46-.029-.633-.029h-.346l.115.518.605 2.823.375 1.843.403 1.814.806 4.004.317 1.526c.115.403.173.749.202.749.028 0 .518-.288.835-.519 1.469-1.036 2.563-2.65 2.966-4.32a6.627 6.627 0 0 0 .202-1.67c0-3.34-2.477-6.365-5.847-6.74"></path></g>
      </g>
    );
  }
}

export default Signature;