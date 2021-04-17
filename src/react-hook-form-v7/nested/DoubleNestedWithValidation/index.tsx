import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import DepthOne from './DepthOne';
import { DoubleNestedWithValidationFormValues } from './types';

export interface DoubleNestedProps {}

const defaultValues: DoubleNestedWithValidationFormValues = {
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

const DoubleNestedWithValidation: React.VFC<DoubleNestedProps> = () => {
  ++renderCount;
  const formMethods = useForm<DoubleNestedWithValidationFormValues>({
    defaultValues,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formMethods;

  return (
    <div>
      <div>render: {renderCount}</div>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit((data: any) => console.log(data))}>
          <div>
            <p>name</p>
            <input {...register('name', { required: 'name is required' })} defaultValue={defaultValues.name} />
            {errors?.name?.message && <p>{errors?.name?.message}</p>}
          </div>
          <DepthOne />
          <button type="submit">submit!</button>
        </form>
      </FormProvider>
      <span className="counter">Render Count: {renderCount}</span>
    </div>
  );
};

export default DoubleNestedWithValidation;
