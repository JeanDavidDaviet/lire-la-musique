var marginDebug = document.querySelector('.margin-debug');
marginDebug.style.top = margin.top + "px";
marginDebug.style.left = margin.left + "px";
marginDebug.style.right = margin.right + "px";
marginDebug.style.bottom = margin.bottom + "px";
var deadlineDebug = document.querySelector('.deadline-debug');
deadlineDebug.style.left = width / 2 + "px";


var stave = document.querySelector('.stave:first-child');
// stave.style.transform = 'translateX(' + (width / 2) + 'px)';

for(var i = 0; i <= numberOfStaves; i++){
	var stave = document.querySelector('.stave:last-child');
    stave.insertAdjacentHTML('afterend', '<g class="stave" style="transform: translateX(' + (200 * i) + 'px)">' + stave.innerHTML + "</g>");
    document.querySelector('.stave:last-child text').innerHTML = i + 1;
}

for(var j = 0; j < numberOfNotesByStaves * numberOfStaves; j++){
  var note = new Note(keysString.charAt(Math.floor(Math.random() * keysString.length)), 4, (j * (staveWidth / numberOfNotesByStaves) - 15));
}

var group = document.querySelector('.group');
group.style.transform = 'translateX(' + (width / 2) + 'px)';
var x = 0;

function moveScore(){
	requestAnimationFrame(moveScore);
	group.style.transform = "translateX(" + (width / 2) - x + "px)";
	x -= tempo / 60;
}
// moveScore();