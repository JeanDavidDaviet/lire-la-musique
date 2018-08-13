import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import config from './config.js';
import scales from './scales.js';
import signatures from './signatures.js';
import Mesure from './components/Mesure/Mesure';
// import registerServiceWorker from './registerServiceWorker';

const chosenScale = "Ab";

ReactDOM.render(<Mesure config={config} chosenScale={chosenScale} scale={scales[chosenScale]} signature={signatures[chosenScale]} running={true}/>, document.getElementById('root'));
// registerServiceWorker();
