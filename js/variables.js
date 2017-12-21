var svg = document.querySelector('svg');
var marginDebug = document.querySelector('.margin-debug');
var deadlineDebug = document.querySelector('.deadline-debug');

var group = document.querySelector('.group');
var staveGroup = document.querySelector('.staves');
var staveTemplate = document.querySelector('.stave-template');

var margin = {top:50, bottom: 50, left: 50, right: 50};
var width = window.innerWidth - margin.left - margin.right;
var height = window.innerHeight - margin.top - margin.bottom;
var tempo = 60;
var groupOrigineX = width / 2;
var groupOrigineY = height / 2 - 40 - 40;

var staveWidth = 200;
var numberOfStaves = Math.ceil(width / 2 / staveWidth);
var numberOfNotesByStaves = 6;
var gapBetweenNotes = 30;
var staveGroupEndNumber = 0;

var addStavesInterval = null;

var interval = 5;
var double_interval = interval * 2;
var keysString = "ABCDEFG";
var gammes = {
  "C": {
    "notes": ["C","D","E","F","G","A","B"],
    "alterations": [0,0,0,0,0,0,0]
  },
  "C#": {
    "notes": ["C","D","E","F","G","A","B"],
    "alterations": [1,1,1,1,1,1,1]
  },
  "Db": {
    "notes": ["D","E","F","G","A","B","C"],
    "alterations": [-1,-1,0,-1,-1,-1,0]
  },
  "D": {
    "notes": ["D","E","F","G","A","B","C"],
    "alterations": [0,0,1,0,0,0,1]
  },
  "D#": {
    "notes": ["D","E","F","G","A","B","C"],
    "alterations": [0,-1,0,0,-1,-1,0]
  },
  "Eb": {
    "notes": ["E","F","G","A","B","C","D"],
    "alterations": [-1,0,0,-1,-1,0,0]
  },
  "E": {
    "notes": ["E","F","G","A","B","C","D"],
    "alterations": [0,1,1,0,0,1,1]
  },
  "F": {
    "notes": ["F","G","A","B","C","D","E"],
    "alterations": [0,0,0,-1,0,0,0]
  },
  "F#": {
    "notes": ["F","G","A","B","C","D","E"],
    "alterations": [0,-1,-1,-1,0,-1,-1]
  },
  "Gb": {
    "notes": ["G","A","B","C","D","E","F"],
    "alterations": [-1,-1,-1,-1,-1,-1,0]
  },
  "G": {
    "notes": ["G","A","B","C","D","E","F"],
    "alterations": [0,0,0,0,0,0,1]
  },
  "G#": {
    "notes": ["G","A","B","C","D","E","F"],
    "alterations": [0,-1,-1,0,-1,-1,0]
  },
  "Ab": {
    "notes": ["A","B","C","D","E","F","G"],
    "alterations": [-1,-1,0,-1,-1,0,0]
  },
  "A": {
    "notes": ["A","B","C","D","E","F","G"],
    "alterations": [0,0,1,1,0,0,1]
  },
  "A#": {
    "notes": ["A","B","C","D","E","F","G"],
    "alterations": [0,-1,0,0,-1,0,0]
  },
  "Bb": {
    "notes": ["B","C","D","E","F","G","A"],
    "alterations": [-1,0,0,-1,0,0,0]
  },
  "B": {
    "notes": ["B","C","D","E","F","G","A"],
    "alterations": [0,1,1,0,1,1,1]
  }
}
var notesToGroupYLinear = {
  "A0": 115,
  "B0": 110,
  "C0": 105,
  "D0": 100,
  "E0": 95,
  "F0": 90,
  "G0": 85,
  "A1": 80,
  "B1": 75,
  "C1": 70,
  "D1": 65,
  "E1": 60,
  "F1": 55,
  "G1": 50,
  "A2": 45,
  "B2": 40,
  "C2": 35,
  "D2": 30,
  "E2": 25,
  "F2": 20,
  "G2": 15,
  "A3": 10,
  "B3": 5,
  "C3": 0,
  "D3": -5,
  "E3": -10,
  "F3": -15,
  "G3": -20,
  "A4": -25,
  "B4": -30,
  "C4": -35,
  "D4": -40,
  "E4": -45,
  "F4": -50,
  "G4": -55,
  "A5": -60,
  "B5": -65,
  "C5": -70,
  "D5": -75,
  "E5": -80,
  "F5": -85,
  "G5": -90
}
var notesToGroupYLinearArray = _.values(notesToGroupYLinear);
var notesToGroupY = {
  "0": {
    "A": 115,
    "B": 110,
    "C": 105,
    "D": 100,
    "E": 95,
    "F": 90,
    "G": 85
  },
  "1": {
    "A": 80,
    "B": 75,
    "C": 70,
    "D": 65,
    "E": 60,
    "F": 55,
    "G": 50
  },
  "2": {
    "A": 45,
    "B": 40,
    "C": 35,
    "D": 30,
    "E": 25,
    "F": 20,
    "G": 15
  },
  "3": {
    "A": 10,
    "B": 5,
    "C": 0,
    "D": -5,
    "E": -10,
    "F": -15,
    "G": -20
  },
  "4" : {
    "A": -25,
    "B": -30,
    "C": -35,
    "D": -40,
    "E": -45,
    "F": -50,
    "G": -55
  },
  "5" : {
    "A": -60,
    "B": -65,
    "C": -70,
    "D": -75,
    "E": -80,
    "F": -85,
    "G": -90
  }
};