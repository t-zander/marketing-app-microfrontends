import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Landing from "./Landing";
import Pricing from "./Pricing";
import { StylesProvider } from "@material-ui/core";

const App = () => {
  return (
    <StylesProvider>
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
