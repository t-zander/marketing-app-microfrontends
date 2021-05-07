import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Landing from './Landing';
import Pricing from './Pricing';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';
import { History } from 'history';

export interface AppProps {
  history: History;
  isSignedIn: boolean;
}

// prefixes all classes for marketing app with 'container' instead of jss
// by default it will create smth like jss-1
// which will lead to classes collision
// because our container app uses copy of css in js from material ui
// and will create the same jss-1 prefix
const generateClassName = createGenerateClassName({
  productionPrefix: 'marketing'
});

const App = ({ history, isSignedIn }: AppProps) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};

export default App;
