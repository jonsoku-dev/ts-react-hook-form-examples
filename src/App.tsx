import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Loading from './Loading';

const components = [
  {
    name: 'Basic',
  },
  {
    name: 'Controller',
  },
  {
    name: 'Nested',
  },
  {
    name: 'Validate',
  },
].map((route) => ({
  ...route,
  component: Loadable({
    loader: () => import(`./routes/${route.name}`),
    loading: Loading,
  }),
}));

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {components.map((com) => (
              <li key={com.name}>
                <Link to={`/${com.name.toLocaleLowerCase()}`}>{com.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Switch>
          {components.map((com) => (
            <Route key={com.name} path={`/${com.name.toLocaleLowerCase()}`}>
              <com.component />
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
