function Note(_note, _high, _x, _positionOnStaveForce){
  this.note = _note;
  this.high = parseInt(_high, 10);
  this.x = _x;
  this.bars = '';
  this.positionOnStave = (_positionOnStaveForce === undefined) ? notesToGroupYLinear[this.note + this.high] : _positionOnStaveForce;
  this.isLow = this.positionOnStave <= -30 ? true : false;
  console.log(this.positionOnStave);

  this.calculateLowBar();
  this.toString();
}
Note.prototype.calculateLowBar = function(){
  var _y = 130;
  var _numberOfLowBar = 0;
  if(this.positionOnStave > 0){
    _numberOfLowBar = Math.abs(this.positionOnStave / 5);

    if(this.positionOnStave % double_interval === interval){
      _y -= interval;
      _numberOfLowBar = Math.ceil(Math.abs(this.positionOnStave / 5) / 2);
    }else{
      _numberOfLowBar = Math.abs(this.positionOnStave / 5) / 2 + 1;
    }

    for (var i = 0; i < _numberOfLowBar; i++) {
      this.bars += '<path stroke-width="1" fill="none" stroke="#999999" stroke-dasharray="none" font-family="Arial" font-size="10pt" font-weight="normal" font-style="normal" d="M24 ' + _y + ' L 42 ' + _y + '"></path>';
      _y -= double_interval;
    }
  }else if(this.positionOnStave < -60){
    _numberOfLowBar = Math.abs((this.positionOnStave + 55) / 5);

    if(this.positionOnStave % double_interval === -interval){
      _y += interval;
      _numberOfLowBar = Math.abs((this.positionOnStave + 55) / 5) / 2;
    }else{
      _numberOfLowBar = Math.floor(Math.abs((this.positionOnStave + 55) / 5)) / 2;
    }

    for (var i = 0; i < _numberOfLowBar; i++) {
      this.bars += '<path stroke-width="1" fill="none" stroke="#999999" stroke-dasharray="none" font-family="Arial" font-size="10pt" font-weight="normal" font-style="normal" d="M24 ' + _y + ' L 42 ' + _y + '"></path>';
      _y += double_interval;
    }

  }else if(this.positionOnStave === 0 || this.positionOnStave === -50){
    this.bars += '<path stroke-width="1" fill="none" stroke="#999999" stroke-dasharray="none" font-family="Arial" font-size="10pt" font-weight="normal" font-style="normal" d="M24 ' + _y + ' L 42 ' + _y + '"></path>';
  }
}
Note.prototype.toString = function(){
  document.querySelector('.notes').insertAdjacentHTML('beforeend', `<g class="note" style="transform:translate3d(${this.x}px, ${this.positionOnStave}px, 0px);">
          ${this.bars}
            <g class="note-stem">
              <path stroke-width="1.5" fill="none" stroke="black" stroke-dasharray="none" font-family="Arial" font-size="10pt" font-weight="normal" font-style="normal" x="410" y="79.5" width="1" height="41" d="${this.isLow ? 'M 38 130 L 38 95' : 'M 28 130 L 28 165'}"></path>
            </g>
            <g class="note-notehead">
              <path stroke-width="0.3" fill="black" stroke="none" stroke-dasharray="none" font-family="Arial" font-size="10pt" font-weight="normal" font-style="normal" x="410" y="79.5" width="1" height="41" d="M27 130M34.35696 124.77712C34.46928 124.77712,34.63776 124.77712,34.66584 124.77712C34.66584 124.77712,34.69392 124.77712,34.69392 124.77712C34.69392 124.77712,34.8624 124.77712,35.0028 124.77712C37.53 124.91752,39.01824 126.57424,39.01824 128.65216C39.01824 129.66304,38.68128 130.81432,37.83888 131.90944C36.23832 134.0716,33.62688 135.25096,31.3524 135.25096C29.58336 135.25096,28.06704 134.54896,27.33696 133.11688C27.11232 132.55528,27 132.02176,27 131.43208C27 128.37136,30.42576 124.97368,34.35696 124.77712"></path>
            </g>
          </g>`);
}