import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Landing from './Landing';
import Pricing from './Pricing';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

// prefixes all classes for marketing app with 'container' instead of jss
// by default it will create smth like jss-1
// which will lead to classes collision
// because our container app uses copy of css in js from material ui
// and will create the same jss-1 prefix
const generateClassName = createGenerateClassName({
  productionPrefix: 'marketing'
});

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
