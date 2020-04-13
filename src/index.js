import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { Provider } from 'react-redux';
import store from './store/store';
import * as Sentry from '@sentry/browser';
import config from './config';
// import * as mm from '@magenta/music';

// const TWINKLE_TWINKLE = {
//   notes: [
//     {pitch: 60, quantizedStartStep: 0, quantizedEndStep: 1},
//     {pitch: 60, quantizedStartStep: 1, quantizedEndStep: 2},
//     {pitch: 67, quantizedStartStep: 2, quantizedEndStep: 3},
//     {pitch: 67, quantizedStartStep: 3, quantizedEndStep: 4},
//   ],
//   quantizationInfo: {stepsPerQuarter: 4},
//   tempos: [{time: 0, qpm: 60}],
//   totalQuantizedSteps: 4
// };
//     const music_rnn = new mm.MusicRNN('https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/basic_rnn');
//     // music_rnn.initialize();
//     // const qns = mm.sequences.quantizeNoteSequence(TWINKLE_TWINKLE, 4);
//     music_rnn
//     .continueSequence(TWINKLE_TWINKLE, 20, 1.5)
//     .then(console.log);

if(process.env.NODE_ENV === "production"){
  Sentry.init({
    environment: process.env.NODE_ENV,
    release: config.version,
    dsn: "https://66f76919249b4b1788b09d6c0f5f37e4@sentry.io/1409220"
  });
}

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </I18nextProvider>,
  document.getElementById('root')
);

registerServiceWorker();
