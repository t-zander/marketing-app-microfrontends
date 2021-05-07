import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import {
  createGenerateClassName,
  CssBaseline,
  StylesProvider
} from '@material-ui/core';
import Progress from './components/Progress';

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

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const onSignOut = () => {
    setIsSignedIn(false);
  };

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <CssBaseline />
          <Header isSignedIn={isSignedIn} onSignOut={onSignOut} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthMFE setIsSignedIn={setIsSignedIn} />
              </Route>
              <Route path="/">
                <MarketingMFE isSignedIn={isSignedIn} />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
