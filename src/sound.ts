//@ts-ignore
import sounds from './acoustic-grand-piano.js';

const playNote = async (note: string) => {
    const url = note;
    const context = new AudioContext();
    const audioBuffer = await fetch(url)
        .then(res => res.arrayBuffer())
        .then(buffer => context.decodeAudioData(buffer));

    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);
    source.start(context.currentTime, 0, .5);
}
