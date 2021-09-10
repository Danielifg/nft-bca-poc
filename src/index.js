import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '@gnosis.pm/safe-react-components';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './global';
import { Web3ReactProvider } from "@web3-react/core"
import { Web3Provider } from "@ethersproject/providers";
import App from './App';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function getLibrary(provider) {
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000

    return library
}

Sentry.init({
  dsn: "https://b83ff292003f42ab82ccd04d41caf4cf@o995099.ingest.sentry.io/5953875",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
          <Web3ReactProvider getLibrary={getLibrary}>
            <App />
          </Web3ReactProvider>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
