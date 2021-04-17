import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import BasicRef from '../react-hook-form-v7/basic/basic-ref';
import ControllerHook from '../react-hook-form-v7/basic/ControllerHook';
import DirtyTouchedSubmit from '../react-hook-form-v7/basic/DirtyTouchedSubmit';
import FieldArray from '../react-hook-form-v7/basic/FieldArray';
import FieldArrayAdvanced from '../react-hook-form-v7/basic/FieldArrayAdvanced';
import FieldArrayMinLength from '../react-hook-form-v7/basic/FieldArrayMinLengh';
import InitialFormState from '../react-hook-form-v7/basic/InitialFormState';
import Trigger from '../react-hook-form-v7/basic/Trigger';

export interface BasicProps {}

const Basic: React.FC<BasicProps> = () => {
  const match = useRouteMatch();
  console.log(match);
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to={`${match.url}/dirty-touched-submit`}>DirtyTouchedSubmit</Link>
          </li>
          <li>
            <Link to={`${match.url}/field-array`}>Field Array</Link>
          </li>
          <li>
            <Link to={`${match.url}/field-array-advanced`}>Field Array Advanced</Link>
          </li>
          <li>
            <Link to={`${match.url}/field-array-min-length`}>Field Array Min Length</Link>
          </li>
          <li>
            <Link to={`${match.url}/trigger`}>Trigger</Link>
          </li>
          <li>
            <Link to={`${match.url}/initial-form-state`}>InitialFormState</Link>
          </li>
          <li>
            <Link to={`${match.url}/ref`}>Ref</Link>
          </li>{' '}
          <li>
            <Link to={`${match.url}/controller-hook`}>ControllerHook</Link>
          </li>
        </ul>

        <Switch>
          <Route path={`${match.url}/dirty-touched-submit`}>
            <DirtyTouchedSubmit />
          </Route>
          <Route path={`${match.url}/field-array`}>
            <FieldArray />
          </Route>
          <Route path={`${match.url}/field-array-advanced`}>
            <FieldArrayAdvanced />
          </Route>
          <Route path={`${match.url}/field-array-min-length`}>
            <FieldArrayMinLength />
          </Route>
          <Route path={`${match.url}/trigger`}>
            <Trigger />
          </Route>
          <Route path={`${match.url}/initial-form-state`}>
            <InitialFormState />
          </Route>
          <Route path={`${match.url}/ref`}>
            <BasicRef />
          </Route>
          <Route path={`${match.url}/controller-hook`}>
            <ControllerHook />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Basic;
