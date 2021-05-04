import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createMemoryHistory, createBrowserHistory, History } from 'history';

export interface AdditionalMountOptions {
  onNavigate?: () => void;
  defaultHistory?: History;
}
const mount = (
  el: Element | DocumentFragment,
  { onNavigate, defaultHistory }: AdditionalMountOptions
) => {
  const history = defaultHistory || createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history} />, el);
  return {
    onParentNavigate({ pathname: nextPathName }: Location) {
      const { pathname: currentPathName } = history.location;
      if (nextPathName !== currentPathName) {
        history.push(nextPathName);
      }
    }
  };
};

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('auth-dev-root');
  // we are running marketing mfe in isolation, not through container
  if (el) {
    mount(el, {
      defaultHistory: createBrowserHistory()
    });
  }
}

// for use in container in prod and dev environments
export { mount };
