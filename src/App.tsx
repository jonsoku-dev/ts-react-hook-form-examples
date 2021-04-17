/*
 * Copyright (c) 2021 LINE Corporation. All rights reserved.
 * LINE Corporation PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

import React from 'react';

import Basic from './react-hook-form-example/basic';
import BasicRef from './react-hook-form-example/basic-ref';
import BasicValidation from './react-hook-form-example/basic-validation';
import FormErrors from './react-hook-form-example/form-errors';
import HookController from './react-hook-form-example/hook-controller';
import Register from './react-hook-form-example/register';
import { RenderPropsNested } from './react-hook-form-example/render-props-nested';
import WithSelect from './react-hook-form-example/with-select';
import CustomValidation from './react-hook-form-v7/CustomValidation';
import DirtyTouchedSubmit from './react-hook-form-v7/DirdyTouchedSubmit';
import DoubleNested from './react-hook-form-v7/DoubleNested';
import FieldArray from './react-hook-form-v7/FieldArray';
import FieldArrayAdvanced from './react-hook-form-v7/FieldArrayAdvanced';
import FieldArrayMinLength from './react-hook-form-v7/FieldArrayMinLengh';
import FormProviderExample from './react-hook-form-v7/FormProviderExample';
import GetValuesCompareFields from './react-hook-form-v7/GetValuesCompareFields';
import InitialFormState from './react-hook-form-v7/InitialFormState';
import NestedField from './react-hook-form-v7/NestedField';
import Trigger from './react-hook-form-v7/Trigger';
import ValidationSchema from './react-hook-form-v7/ValidationSchema';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <h1>Basic</h1>
      <Basic />
      <hr />
      <h1>Register</h1>
      <Register />
      <hr />
      <h1>BasicValidation</h1>
      <BasicValidation />
      <hr />
      <h1>BasicRef</h1>
      <BasicRef />
      <hr />
      <h1>WithSelect</h1>
      <WithSelect />
      <hr />
      <h1>HookController</h1>
      <HookController />
      <hr />
      <h1>FormErrors</h1>
      <FormErrors />
      <hr />
      <h1>RenderPropsNested</h1>
      <RenderPropsNested />
      <hr />
      <h1>FieldArray</h1>
      <FieldArray />
      <hr />
      <h1>Trigger</h1>
      <Trigger />
      <hr />
      <h1>FormProviderExample</h1>
      <FormProviderExample />
      <hr />
      <h1>GetValuesCompareFields</h1>
      <GetValuesCompareFields />
      <hr />
      <h1>InitialFormState</h1>
      <InitialFormState />
      <hr />
      <h1>NestedField</h1>
      <NestedField />
      <hr />
      <h1>DirtyTouchedSubmit</h1>
      <DirtyTouchedSubmit />
      <hr />
      <h1>FieldArrayMinLength</h1>
      <FieldArrayMinLength />
      <hr />
      <h1>CustomValidation</h1>
      <CustomValidation />
      <hr />
      <h1>ValidationSchema</h1>
      <ValidationSchema />
      <hr />
      <h1>FieldArrayAdvanced</h1>
      <FieldArrayAdvanced />
      <hr />
      <h1>DoubleNested (+FormProvider)</h1>
      <DoubleNested />
      <hr />
    </div>
  );
};

export default App;
