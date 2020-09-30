import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Api from 'pages/Api';
import Login from 'pages/LoginPage';
import SiteReact from 'pages/SiteReact';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/sitereact" exact component={SiteReact} />
      <Route path="/api" exact component={Api} />
    </Switch>
  </BrowserRouter>
);

export default Router;
