import { Flow } from "vexflow";
const Formatter = Flow.Formatter;
const Renderer = Flow.Renderer;
const Stave = Flow.Stave;
const StaveNote = Flow.StaveNote;

// Create an SVG renderer and attach it to the DIV element with id="output".
const div = document.getElementById("output") as HTMLDivElement;
const renderer = new Renderer(div, Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(window.innerWidth, 200);
const context = renderer.getContext();

const svgChildren = (div.firstElementChild as SVGElement).children as HTMLCollectionOf<SVGGElement>;

const generateStave = (oldStave?: Flow.Stave): Flow.Stave => {
    const width = oldStave ? oldStave.getWidth() : 0;
    // const x = oldStave ? oldStave.getX() : window.innerWidth / 2;
    const x = oldStave ? oldStave.getX() : 0;
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

let scroll = 0;
let distanceInPx = 100;
let durationInMs = 1000;
function animateWidth(now: number) {
    requestAnimationFrame(animateWidth);
    scroll = now * distanceInPx / durationInMs;

    Array.from(svgChildren).forEach((c) => {
        c.setAttribute('transform', `translate(${scroll} 0)`);
    });

}
requestAnimationFrame(animateWidth);


