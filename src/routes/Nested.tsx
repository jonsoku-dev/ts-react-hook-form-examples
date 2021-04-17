import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';

import DoubleNested from '../react-hook-form-v7/nested/DoubleNested';
import DoubleNestedWithValidation from '../react-hook-form-v7/nested/DoubleNestedWithValidation';
import FormProviderExample from '../react-hook-form-v7/nested/FormProviderExample';
import NestedField from '../react-hook-form-v7/nested/NestedField';

export interface NestedProps {}

const Nested: React.FC<NestedProps> = () => {
  const match = useRouteMatch();
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to={`${match.url}/nested-field`}>NestedField</Link>
          </li>
          <li>
            <Link to={`${match.url}/form-provider`}>FormProviderExample</Link>
          </li>
          <li>
            <Link to={`${match.url}/double-nested`}>DoubleNested</Link>
          </li>
          <li>
            <Link to={`${match.url}/double-nested-with-validation`}>DoubleNestedWithValidation</Link>
          </li>
        </ul>

        <Switch>
          <Route path={`${match.url}/nested-field`}>
            <NestedField />
          </Route>
          <Route path={`${match.url}/form-provider`}>
            <FormProviderExample />
          </Route>
          <Route path={`${match.url}/double-nested`}>
            <DoubleNested />
          </Route>
          <Route path={`${match.url}/double-nested-with-validation`}>
            <DoubleNestedWithValidation />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Nested;
