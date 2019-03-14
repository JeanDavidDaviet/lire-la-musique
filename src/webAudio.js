const context = new AudioContext();
const oscillator = context.createOscillator();
oscillator.start(0);

const gain = context.createGain();
gain.gain.value = 0;

oscillator.connect(gain);
gain.connect(context.destination);

export {
  context,
  oscillator,
  gain
}
