import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import WithReactSelect from '../react-hook-form-v7/controller/WithReactSelect';

export interface ControllerProps {}

const Controller: React.FC<ControllerProps> = () => {
  const match = useRouteMatch();
  console.log(match);
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to={`${match.url}/with-react-select`}>WithReactSelect</Link>
          </li>
        </ul>

        <Switch>
          <Route path={`${match.url}/with-react-select`}>
            <WithReactSelect />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Controller;
