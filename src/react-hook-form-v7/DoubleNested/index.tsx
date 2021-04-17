import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import DepthOne from './DepthOne';
import { DoubleNestedFormValues } from './types';

export interface DoubleNestedProps {}

const defaultValues: DoubleNestedFormValues = {
  name: 'wow',
  depthOne: [
    {
      title: '',
      desc: '',
      depthTwo: [
        {
          language: '',
          text: '',
        },
      ],
    },
  ],
};

let renderCount = 0;

const DoubleNested: React.VFC<DoubleNestedProps> = () => {
  ++renderCount;
  const formMethods = useForm<DoubleNestedFormValues>({
    defaultValues,
  });
  const { register, handleSubmit } = formMethods;
  return (
    <div>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit((data: any) => console.log(data))}>
          <div>
            <p>name</p>
            <input {...register('name')} defaultValue={defaultValues.name} />
          </div>
          <DepthOne />
          <button type="submit">submit!</button>
        </form>
      </FormProvider>
      <span className="counter">Render Count: {renderCount}</span>
    </div>
  );
};

export default DoubleNested;
