import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import Loading from '../Loading';

const components = [
  { name: 'DoubleNested' },
  { name: 'DoubleNestedWithValidation' },
  { name: 'FormProviderExample' },
  { name: 'NestedField' },
].map((route) => ({
  ...route,
  component: Loadable({
    loader: () => import(`../react-hook-form-v7/nested/${route.name}`),
    loading: Loading,
  }),
}));

export interface NestedProps {}

const Nested: React.FC<NestedProps> = () => {
  const match = useRouteMatch();
  return (
    <Router>
      <div>
        <ul>
          {components.map((com) => (
            <li key={com.name}>
              <Link to={`${match.url}/${com.name.toLocaleLowerCase()}`}>{com.name}</Link>
            </li>
          ))}
        </ul>

        <Switch>
          {components.map((com) => (
            <Route key={com.name} path={`${match.url}/${com.name.toLocaleLowerCase()}`}>
              <com.component />
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default Nested;
