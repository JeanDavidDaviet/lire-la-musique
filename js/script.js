function setSVGSize(){
  width = window.innerWidth - margin.left - margin.right;
  height = window.innerHeight - margin.top - margin.bottom;

  svg.style.width = width;
  svg.style.height = height;
  svg.style.left = margin.left;

  marginDebug.style.top = margin.top + "px";
  marginDebug.style.left = margin.left + "px";
  marginDebug.style.right = margin.right + "px";
  marginDebug.style.bottom = margin.bottom + "px";

  deadlineDebug.style.left = (width / 2 + margin.left)+ "px";
  deadlineDebug.style.top = margin.top + "px";
  deadlineDebug.style.bottom = margin.bottom + "px";

  groupOrigineX = width / 2;
  groupOrigineY = height / 2 - 40 - 40;
  group.style.transform = "translate3d(" + groupOrigineX + "px," + groupOrigineY + "px, 0)";

  numberOfStaves = Math.ceil(width / 2 / staveWidth);
}

function generateNewStave(_numberOfStaves, _numberStaveBeginning){
  for(var i = 0; i < _numberOfStaves; i++){
    staveGroup.insertAdjacentHTML('beforeend', '<g class="stave" style="transform: translateX(' + (staveWidth * i + (staveGroupEndNumber * staveWidth)) + 'px)">' + staveTemplate.innerHTML + "</g>");
    if(debug){
        staveGroup.querySelector('.stave:last-child text').innerHTML = _numberStaveBeginning + i + 1;
    }
  }
  for(var j = 0; j < numberOfNotesByStaves * _numberOfStaves; j++){
    // step the first and second notes to put the treble clef and time signature instead
    if(j > 1 || staveGroupEndNumber !== 0 ){
        new Note(chooseRandomKey(), _.random(3, 4), (j * (staveWidth / numberOfNotesByStaves) - spaceBetweenFinalNoteOfStaves) + (staveGroupEndNumber * staveWidth) );        
    }
  }
  staveGroupEndNumber += _numberOfStaves;
}

function moveScore(){
  group.style.transform = "translate3d(" + groupOrigineX + "px," + groupOrigineY + "px, 0)";
  requestAnimationFrame(moveScore);
  groupOrigineX -= tempo / 60;
}

function setNewStaveInterval(){
  addStavesInterval = setInterval(function(){
    generateNewStave(numberOfStaves,staveGroupEndNumber);
  }, 3000 * numberOfStaves / 4);
}

function chooseRandomKey(){
    return keysString.charAt(Math.floor(Math.random() * keysString.length));
}
function chooseRandomKeyPerlin(){
    return keysString.charAt(Math.floor(generator.getVal(new Date().getTime()) * keysString.length));
}

function gammeAlterationsToNumber(_note){
    return gammeToKeySignature = _.reduce(gammes[_note]["alterations"], function(_old, _new, _index, _array){
        return _old + _new;
    })
}

function setKeySignature(_note){
    var _numberOfAlterations = gammeAlterationsToNumber(_note);
    var _alteration = "";
    if(_numberOfAlterations < 0){
        _alteration = "flat";
    }
    if(_numberOfAlterations > 0){
        _alteration = "sharp";
    }
    var alterationTemplate = document.querySelector('.' + _alteration + '-template');
    var _xCounter = -305;
    for(var i = 0; i < Math.abs(_numberOfAlterations); i++){
        alterationGroup.insertAdjacentHTML('beforeend', alterationTemplate.outerHTML);
        alterationGroup.querySelector('path:last-child').setAttribute('transform', 'translate(' + _xCounter + ',' + alterationsPositionsY[_alteration][i] + ')');
        _xCounter += 10;
    }
}

setSVGSize();
window.addEventListener('resize', setSVGSize);
setKeySignature("D");
generateNewStave(1,0);
generateNewStave(numberOfStaves,1);
// moveScore();
// setNewStaveInterval();