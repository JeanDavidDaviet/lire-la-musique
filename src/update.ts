let scroll = 0;
const distanceInPx = 200;
const durationInMs = 4000;
const stavePerMs = barWidth / distanceInPx * durationInMs

const div = document.getElementById("output") as HTMLDivElement;
const svgChildren = (div.firstElementChild as SVGElement).children as HTMLCollectionOf<SVGGElement>;
function animateWidth(now: number) {
    requestAnimationFrame(animateWidth);
    scroll = now * distanceInPx / durationInMs;

    Array.from(svgChildren).forEach((c) => {
        c.setAttribute('transform', `translate(${-scroll} 0)`);
    });
}
requestAnimationFrame(animateWidth);
