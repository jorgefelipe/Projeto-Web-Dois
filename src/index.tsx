import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from 'styles/global';

import Router from './Routes';

ReactDOM.render(
  <>
    <GlobalStyle />
    <Router />
  </>,
  document.getElementById('root')
);
