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
}

function generateNewStave(_numberOfStaves, _xBeginning, _numberStaveBeginning){
    // debugger;
  for(var i = 0; i < _numberOfStaves; i++){
    staveGroup.insertAdjacentHTML('beforeend', '<g class="stave" style="transform: translateX(' + (200 * i + _xBeginning) + 'px)">' + staveTemplate.innerHTML + "</g>");
    staveGroup.querySelector('.stave:last-child text').innerHTML = _numberStaveBeginning + i + 1;
  }
  for(var j = 0; j < numberOfNotesByStaves * _numberOfStaves; j++){
    var note = new Note(keysString.charAt(Math.floor(Math.random() * keysString.length)), 4, (j * (staveWidth / numberOfNotesByStaves) - 15));
  }
}



function moveScore(){
  group.style.transform = "translate3d(" + groupOrigineX + "px," + groupOrigineY + "px, 0)";
  // requestAnimationFrame(moveScore);
  groupOrigineX -= tempo / 60;
}

setSVGSize();
window.addEventListener('resize', setSVGSize);
generateNewStave(numberOfStaves,0,0);

moveScore();