import { Flow } from "vexflow";
const Formatter = Flow.Formatter;
const Renderer = Flow.Renderer;
const Stave = Flow.Stave;
const StaveNote = Flow.StaveNote;

// Configure the rendering context.
import {Flow} from "vexflow";

const div = document.getElementById("output") as HTMLDivElement;
const renderer = new Renderer(div, Renderer.Backends.SVG);

renderer.resize(window.innerWidth, 200);
const context = renderer.getContext();
const windowSize = window.innerWidth;

const barWidth  = 200;
const barsToRender = Math.ceil((windowSize / 2) / barWidth);
const barsToRenderWithPadding = barsToRender + 2;

const generateStave = (oldStave: Flow.Stave | null): Flow.Stave => {
    const width = oldStave ? oldStave.getWidth() : 0;
    const x = oldStave ? oldStave.getX() : window.innerWidth / 2;
    // const x = oldStave ? oldStave.getX() : 0;
    const staveMeasure = new Stave(width + x, 0, barWidth);
    if (!oldStave) {
        // staveMeasure.addClef("treble").setContext(context).draw();
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

const staves = [];
for (let i = 0; i < barsToRenderWithPadding; i++){
    const staveMeasure = generateStave(i > 0 ? staves[i - 1] : null);
    console.log(staveMeasure.getMeasure())
    staves.push(staveMeasure);
}
