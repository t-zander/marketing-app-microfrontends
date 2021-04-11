import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const mount = (el: Element | DocumentFragment) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("marketing-dev-root");
  if (el) {
    mount(el);
  }
}

export { mount };