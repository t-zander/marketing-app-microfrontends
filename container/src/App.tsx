import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';
import MarketingMFE from './mfes/MarketingMFE';
import AuthMFE from './mfes/AuthMFE';

// prefixes all classes for marketing app with 'container' instead of jss
// by default it will create smth like jss-1
// which will lead to classes collision
// because our marketing app uses copy of css in js from material ui
// and will create the same jss-1 prefix
const generateClassName = createGenerateClassName({
  productionPrefix: 'container'
});

function App() {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingMFE />
          <AuthMFE />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
