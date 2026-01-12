import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { Provider } from 'react-redux';
import store from './store/store';
import * as Sentry from '@sentry/browser';
import config from './config';
import DevTools from './store/DevTools';

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    environment: process.env.NODE_ENV,
    release: config.version,
    dsn: 'https://66f76919249b4b1788b09d6c0f5f37e4@sentry.io/1409220',
  });
}

createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <App />
      {process.env.NODE_ENV === 'development' && window.location.search === '?redux' ? (
        <DevTools />
      ) : null}
    </Provider>
  </I18nextProvider>
);

registerServiceWorker();
