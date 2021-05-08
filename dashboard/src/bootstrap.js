import { createApp } from 'vue';
import Dashboard from './components/Dashboard';

const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
  return {};
};

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('dashboard-dev-root');
  // we are running marketing mfe in isolation, not through container
  if (el) {
    mount(el);
  }
}

// for use in container in prod and dev environments
export { mount };
