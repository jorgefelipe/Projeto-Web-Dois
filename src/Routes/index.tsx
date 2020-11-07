import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { PrivateRoute } from 'components';
import Login from 'pages/LoginPage';
import RegistrePage from 'pages/RegisterPage';
import SiteReact from 'pages/SiteReact';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/registre" exact component={RegistrePage} />
      <PrivateRoute path="/sitereact" exact component={SiteReact} />
    </Switch>
  </BrowserRouter>
);

export default Router;
