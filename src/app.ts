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
const windowSize = window.innerWidth;

const barWidth  = 200;
const barsToRender = Math.ceil((windowSize / 2) / barWidth);
const barsToRenderWithPadding = barsToRender + 2;

const svgChildren = (div.firstElementChild as SVGElement).children as HTMLCollectionOf<SVGGElement>;

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
    staves.push(staveMeasure);
}

let scroll = 0;
const distanceInPx = 200;
const durationInMs = 4000;
const stavePerMs = barWidth / distanceInPx * durationInMs
function animateWidth(now: number) {
    requestAnimationFrame(animateWidth);
    scroll = now * distanceInPx / durationInMs;

    Array.from(svgChildren).forEach((c) => {
        c.setAttribute('transform', `translate(${-scroll} 0)`);
    });
}
requestAnimationFrame(animateWidth);


