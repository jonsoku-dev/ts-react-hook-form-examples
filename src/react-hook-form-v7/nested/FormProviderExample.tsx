import React from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

type FormValues = {
  test: string;
  nested: string;
};

let renderCount = 0;

export default function FormProviderExample() {
  renderCount++;
  const methods = useForm<FormValues>();
  const { register, handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <div>render: {renderCount}</div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <label htmlFor="form-provider-test">Test</label>
        <input id="form-provider-test" {...register('test', { required: true })} />
        <label htmlFor="form-provider-nested">Nested Input</label>
        <Test />
        <input type="submit" />
      </form>
    </FormProvider>
  );
}

function Test() {
  const data = useFormContext<FormValues>();
  return <input id="form-provider-nested" {...data.register('nested')} />;
}
