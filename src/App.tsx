/*
 * Copyright (c) 2021 LINE Corporation. All rights reserved.
 * LINE Corporation PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

import React from 'react';

import Basic from './react-hook-form-example/basic';
import BasicRef from './react-hook-form-example/basic-ref';
import BasicValidation from './react-hook-form-example/basic-validation';
import Register from './react-hook-form-example/register';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      {/*<Basic />*/}
      {/*<Register />*/}
      {/*<BasicValidation />*/}
      <BasicRef />
    </div>
  );
};

export default App;
