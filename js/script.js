var stave = document.querySelector('.stave:first-child');
stave.style.transform = 'translateX(' + (width / 2) + 'px)';

for(var i = 1; i <= 9; i++){
	var stave = document.querySelector('.stave:last-child');
    stave.insertAdjacentHTML('afterend', '<g class="stave" style="transform: translateX(' + ((width / 2) + (200 * i)) + 'px)">' + stave.innerHTML + "</g>");
	stave.querySelector('text').innerHTML = i;
}

for(var j = 0; j < 6 * document.querySelectorAll('.stave').length; j++){
  var note = new Note(keysString.charAt(Math.floor(Math.random() * keysString.length)), 4, (width / 2) + (j * (400 / 12) - 15));
}

var group = document.querySelector('.group');
var x = 0;
function moveScore(){
	requestAnimationFrame(moveScore);
	group.style.transform = "translateX(" + x + "px)";
	x -= tempo / 60;
}
moveScore();