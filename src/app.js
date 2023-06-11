import { Stave, StaveNote, Beam, Formatter, Renderer, Vex, log } from "vexflow";

// Create an SVG renderer and attach it to the DIV element with id="output".
const div = document.getElementById("output");
const renderer = new Renderer(div, Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(720, 130);
const context = renderer.getContext();

// Measure 1
const staveMeasure1 = new Stave(0, 0, 225);
staveMeasure1.addClef("treble").setContext(context).draw();

const notesMeasure1 = [
    new StaveNote({ keys: ["c/4"], duration: "q" }), 
    new StaveNote({ keys: ["c/4"], duration: "q" }), 
    new StaveNote({ keys: ["c/4"], duration: "q" }), 
    new StaveNote({ keys: ["c/4"], duration: "q" }), 
];

// Helper function to justify and draw a 4/4 voice
Formatter.FormatAndDraw(context, staveMeasure1, notesMeasure1);

// Measure 2 - second measure is placed adjacent to first measure.
const staveMeasure2 = new Stave(staveMeasure1.width + staveMeasure1.x, 0, 200);


const notesMeasure2 = [
    new StaveNote({ keys: ["c/4"], duration: "q" }), 
    new StaveNote({ keys: ["c/4"], duration: "q" }), 
    new StaveNote({ keys: ["c/4"], duration: "q" }), 
    new StaveNote({ keys: ["c/4"], duration: "q" }), 
];


// // Create the beams for 8th notes in second measure.
// const beam1 = new Beam(notesMeasure2_part1);
// const beam2 = new Beam(notesMeasure2_part2);

// const notesMeasure2 = notesMeasure2_part1.concat(notesMeasure2_part2);

staveMeasure2.setContext(context).draw();
Formatter.FormatAndDraw(context, staveMeasure2, notesMeasure2);

staveMeasure3 = generateStave(staveMeasure2)
staveMeasure4 = generateStave(staveMeasure3)


// // Render beams
// beam1.setContext(context).draw();
// beam2.setContext(context).draw();

function generateStave(oldStave){
    const staveMeasure = new Stave(oldStave.width + oldStave.x, 0, 200);
    const notesMeasure = [
        new StaveNote({ keys: ["c/4"], duration: "q" }), 
        new StaveNote({ keys: ["c/4"], duration: "q" }), 
        new StaveNote({ keys: ["c/4"], duration: "q" }), 
        new StaveNote({ keys: ["c/4"], duration: "q" }), 
    ];
    staveMeasure.setContext(context).draw();
    Formatter.FormatAndDraw(context, staveMeasure, notesMeasure);

    return staveMeasure
}