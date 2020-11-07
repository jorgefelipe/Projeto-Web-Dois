import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';

import { PersistGate } from 'redux-persist/integration/react';

import GlobalStyle from 'styles/global';

import Router from './Routes';
import { store, persistor } from './store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ToastProvider autoDismiss>
        <GlobalStyle />
        <Router />
      </ToastProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
