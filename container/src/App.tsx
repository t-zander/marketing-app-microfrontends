import React, { ReactElement } from "react";
import MarketingApp from "./components/MarketingApp";

interface Props {}

function App({}: Props): ReactElement {
  return (
    <div>
      <h1>Container!</h1>
      <hr />
      <MarketingApp />
    </div>
  );
}

export default App;
