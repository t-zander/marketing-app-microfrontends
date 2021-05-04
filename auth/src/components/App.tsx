import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';
import { History } from 'history';

export interface AppProps {
  history: History;
}

// prefixes all classes for marketing app with 'container' instead of jss
// by default it will create smth like jss-1
// which will lead to classes collision
// because our container app uses copy of css in js from material ui
// and will create the same jss-1 prefix
const generateClassName = createGenerateClassName({
  productionPrefix: 'auth'
});

const App = ({ history }: AppProps) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path="/auth/sign-in">
            <h4>Hello auth</h4>
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};

export default App;
