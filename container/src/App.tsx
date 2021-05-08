import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from './components/Header';
import {
  createGenerateClassName,
  CssBaseline,
  StylesProvider
} from '@material-ui/core';
import Progress from './components/Progress';
import DashboardMFE from './mfes/DashboardMFE';

const AuthMFE = lazy(() => import('./mfes/AuthMFE'));
const MarketingMFE = lazy(() => import('./mfes/MarketingMFE'));

// prefixes all classes for marketing app with 'container' instead of jss
// by default it will create smth like jss-1
// which will lead to classes collision
// because our marketing app uses copy of css in js from material ui
// and will create the same jss-1 prefix
const generateClassName = createGenerateClassName({
  productionPrefix: 'container'
});

const history = createBrowserHistory();

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  const onSignOut = () => {
    setIsSignedIn(false);
  };

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <CssBaseline />
        <Header isSignedIn={isSignedIn} onSignOut={onSignOut} />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthMFE setIsSignedIn={setIsSignedIn} />
            </Route>
            <Route path="/dashboard">
              {!isSignedIn && <Redirect to="/" />}
              <DashboardMFE />
            </Route>
            <Route path="/">
              <MarketingMFE isSignedIn={isSignedIn} />
            </Route>
          </Switch>
        </Suspense>
      </StylesProvider>
    </Router>
  );
}

export default App;
