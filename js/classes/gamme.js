function Gamme(_tonique, _high){
  this.high = parseInt(_high, 10);
  this.tonique = _tonique;
}
Gamme.prototype.upwardGamme = function(){
  var gamme = gammes[this.tonique]["notes"];
  var counter = 0;
  var positionOnStaveOfTonique = notesToGroupYLinear[this.tonique + this.high];
  var indexOfToniqueInArray = notesToGroupYLinearArray.indexOf(positionOnStaveOfTonique);

  for(var i in gamme){
    var note = new Note(notesToGroupYLinear[indexOfToniqueInArray], 3, counter, notesToGroupYLinearArray[indexOfToniqueInArray]);
    indexOfToniqueInArray++;

    counter += 15;
  }
}
Gamme.prototype.downwardGamme = function(){
  var gamme = gammes[this.tonique]["notes"];
  var counter = 0;
  var positionOnStaveOfTonique = notesToGroupYLinear[this.tonique + this.high];
  var indexOfToniqueInArray = notesToGroupYLinearArray.indexOf(positionOnStaveOfTonique);

  for(var i in gamme){
    var note = new Note(notesToGroupYLinear[indexOfToniqueInArray], 3, counter, notesToGroupYLinearArray[indexOfToniqueInArray]);
    indexOfToniqueInArray--;

    counter += 15;
  }
}
