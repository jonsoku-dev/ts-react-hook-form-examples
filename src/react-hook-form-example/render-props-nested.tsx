import React from 'react';
import { FormProvider, useForm, useFormContext, UseFormReturn } from 'react-hook-form';

export const ConnectForm: React.FC<any> = ({ children }) => {
  const methods = useFormContext();

  return children({ ...methods });
};

export const DeepNest = () => (
  <ConnectForm>{({ register }: UseFormReturn<any>) => <input {...register('deepNestedInput')} />}</ConnectForm>
);

export const RenderPropsNested = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form>
        <DeepNest />
      </form>
    </FormProvider>
  );
};
