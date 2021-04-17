import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import BasicValidation from '../react-hook-form-v7/validation/BasicValidation';
import BasicValidationWithError from '../react-hook-form-v7/validation/BasicValidationWithError';
import CustomValidation from '../react-hook-form-v7/validation/CustomValidation';
import GetValuesCompareFields from '../react-hook-form-v7/validation/GetValuesCompareFields';
import ValidationSchema from '../react-hook-form-v7/validation/ValidationSchema';

export interface ValidateProps {}

const Validate: React.FC<ValidateProps> = () => {
  const match = useRouteMatch();
  console.log(match);
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to={`${match.url}/basic`}>BasicValidation</Link>
          </li>
          <li>
            <Link to={`${match.url}/basic-with-error`}>BasicValidationWithError</Link>
          </li>
          <li>
            <Link to={`${match.url}/custom-validation`}>CustomValidation</Link>
          </li>
          <li>
            <Link to={`${match.url}/validation-schema`}>ValidationSchema</Link>
          </li>
          <li>
            <Link to={`${match.url}/get-values-compare-field`}>GetValuesCompareField</Link>
          </li>
        </ul>

        <Switch>
          <Route path={`${match.url}/basic`}>
            <BasicValidation />
          </Route>
          <Route path={`${match.url}/basic-with-error`}>
            <BasicValidationWithError />
          </Route>
          <Route path={`${match.url}/validation-schema`}>
            <ValidationSchema />
          </Route>
          <Route path={`${match.url}/get-values-compare-field`}>
            <GetValuesCompareFields />
          </Route>
          <Route path={`${match.url}/custom-validation`}>
            <CustomValidation />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Validate;
