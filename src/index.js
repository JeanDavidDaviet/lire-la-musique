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