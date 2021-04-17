import React from 'react';
import { useForm } from 'react-hook-form';

const defaultValues = {
  firstName: 'jongseok',
  lastName: 'lee',
  email: 'the2792@gmail.com',
};

let renderCount = 0;

function InitialFormState() {
  renderCount++;
  const { register, handleSubmit } = useForm();
  // or you can set the defaultValues within useForm
  // const { register, handleSubmit } = useForm({
  //   defaultValues,
  // });
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <div>
      <div>render: {renderCount}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">First Name</label>
        <input defaultValue={defaultValues.firstName} placeholder="jongseok" {...register('firstName')} />

        <label htmlFor="lastName">Last Name</label>
        <input defaultValue={defaultValues.lastName} placeholder="lee" {...register('lastName')} />

        <label htmlFor="email">Email</label>
        <input defaultValue={defaultValues.email} placeholder="the2792@gmail.com" type="email" {...register('email')} />

        <input type="submit" />
      </form>
    </div>
  );
}

export default InitialFormState;
