import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignIn from './components/SignIn'
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from 'react-router-dom';
import Routes from './Routes';

export default () => {
  return (
    <Router>
      <div className="App wrapper">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/home" component={Routes} />
        </Switch>
      </div>
    </Router>
  );
}