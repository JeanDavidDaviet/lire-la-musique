import {Stave, StaveNote, Formatter, Renderer} from "vexflow";

// Create an SVG renderer and attach it to the DIV element with id="output".
const div = document.getElementById("output") as HTMLDivElement;
const renderer = new Renderer(div, Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(window.innerWidth, 200);
const context = renderer.getContext();

const generateStave = (oldStave?: Stave): Stave => {
    const width = oldStave ? oldStave.getWidth() : 0;
    const x = oldStave ? oldStave.getX() : window.innerWidth / 2;
    const staveMeasure = new Stave(width + x, 0, 200);
    if (!oldStave) {
        staveMeasure.addClef("treble").setContext(context).draw();
    }
    const notesMeasure = [
        new StaveNote({keys: ["c/4"], duration: "q"}),
        new StaveNote({keys: ["c/4"], duration: "q"}),
        new StaveNote({keys: ["c/4"], duration: "q"}),
        new StaveNote({keys: ["c/4"], duration: "q"}),
    ];
    staveMeasure.setContext(context).draw();
    Formatter.FormatAndDraw(context, staveMeasure, notesMeasure);

    return staveMeasure
}
const staveMeasure1 = generateStave();
const staveMeasure2 = generateStave(staveMeasure1);
const staveMeasure3 = generateStave(staveMeasure2);
const staveMeasure4 = generateStave(staveMeasure3);
