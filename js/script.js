function setSVGSize(){
  topLevel.style.position = "relative";
  width = topLevel.clientWidth - margin.left - margin.right;
  height = topLevel.clientHeight - margin.top - margin.bottom;

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
  if(isKeys){
    deadlineDebug.style.display = "none";
    tempoInput.parentNode.style.display = "none";
  }

  groupOrigineX = width / 2;
  groupOrigineY = height / 2 - 40 - 40;
  group.style.transform = "translate3d(" + groupOrigineX + "px," + groupOrigineY + "px, 0)";

  staveTemplate.querySelector('rect:last-child').setAttribute('x', staveWidth);
  staveTemplate.querySelectorAll('path').forEach(function(element){
    element.setAttribute('d', element.getAttribute('d').replace('L200', 'L' + staveWidth));
  });


  numberOfStaves = Math.ceil(width / 2 / staveWidth);
}

function generateNewStave(_numberOfStaves, _numberStaveBeginning){
  for(var i = 0; i < _numberOfStaves; i++){
    staveGroup.insertAdjacentHTML('beforeend', '<g class="stave" style="transform: translateX(' + (staveWidth * i + (staveGroupEndNumber * staveWidth)) + 'px)">' + staveTemplate.innerHTML + "</g>");
    // if(debug){
      var _intervalChord = Math.floor(Math.random() * 3);
      var _majorOrMinorChord = Math.floor(Math.random() * 2);
      if(!isKeys){
        staveGroup.querySelector('.stave:last-child text').innerHTML = gammes[currentTonique]["chords"][_intervalChord][_majorOrMinorChord];
      }
    // }
  }
  if(isScore){
      for(var j = 0; j < numberOfNotesByStaves * _numberOfStaves; j++){
        // step the first and second notes to put the treble clef and time signature instead
        if(j > 1 || staveGroupEndNumber !== 0 ){
            new Note(chooseRandomKey(), _.random(3,4), (j * (staveWidth / numberOfNotesByStaves) - spaceBetweenFinalNoteOfStaves) + (staveGroupEndNumber * staveWidth) );
        }
      }
  }
  staveGroupEndNumber += _numberOfStaves;
}

function moveScore(){
  group.style.transform = "translate3d(" + groupOrigineX + "px," + groupOrigineY + "px, 0)";
  idRAF = requestAnimationFrame(moveScore);
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
    currentTonique = _note;
    select.querySelector('option[value="' + currentTonique + '"]').setAttribute('selected', 'selected');
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
    alterationGroup.innerHTML = "";
    for(var i = 0; i < Math.abs(_numberOfAlterations); i++){
        alterationGroup.insertAdjacentHTML('beforeend', alterationTemplate.outerHTML);
        alterationGroup.querySelector('path:last-child').setAttribute('transform', 'translate(' + _xCounter + ',' + alterationsPositionsY[_alteration][i] + ')');
        _xCounter += 10;
    }
}

function setKeyChooser(){
  select.addEventListener('change', changeKey);
  topLevel.appendChild(select);
}

function setTempo(){
  tempo = parseInt(tempoInput.value, 10);
}

function changeKey(){
  reset();
  setKeySignature(this.querySelector('option:checked').innerHTML);
  start();
}

function start(){
  setSVGSize();
  window.addEventListener('resize', setSVGSize);
  setKeyChooser();
  generateNewStave(1,0);
  if(!isKeys){
    tempoInput.addEventListener('change', setTempo);
    generateNewStave(numberOfStaves,1);
    moveScore();
    setNewStaveInterval();
  }
}

function reset(){
  select.removeEventListener('change', changeKey);
  topLevel.removeChild(select);
  staveGroup.innerHTML = "";
  staveGroupEndNumber = 0;
  notesGroup.innerHTML = "";
  cancelAnimationFrame(idRAF);
  clearInterval(addStavesInterval);
}

setKeySignature("C");
start();