import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Login from 'pages/LoginPage';
import MoviesPage from 'pages/MoviePage';
import RegistrePage from 'pages/RegisterPage';
import SiteReact from 'pages/SiteReact';

const Router = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/sitereact" exact component={SiteReact} />
      <Route path="/movies" exact component={MoviesPage} />
      <Route path="/registre" exact component={RegistrePage} />
    </Switch>
  </HashRouter>
);

export default Router;
