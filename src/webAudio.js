let context = undefined;

const getAudioContext = () => {
  if(context === undefined){
    context = new AudioContext();
    context.oscillator = context.createOscillator();
    context.oscillator.start(0);

    context.gain = context.createGain();
    context.gain.gain.value = 0;

    context.oscillator.connect(context.gain);
    context.gain.connect(context.destination);
  }
  return context;
}

export default getAudioContext;
