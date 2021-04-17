import React from 'react';
import { useForm } from 'react-hook-form';

const defaultValues = {
  firstName: 'bill',
  lastName: 'luo',
  email: 'bluebill1049@hotmail.com',
};

function InitialFormState() {
  const { register, handleSubmit } = useForm();
  // or you can set the defaultValues within useForm
  // const { register, handleSubmit } = useForm({
  //   defaultValues,
  // });
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name</label>
      <input defaultValue={defaultValues.firstName} placeholder="bill" {...register('firstName')} />

      <label htmlFor="lastName">Last Name</label>
      <input defaultValue={defaultValues.lastName} placeholder="luo" {...register('lastName')} />

      <label htmlFor="email">Email</label>
      <input
        defaultValue={defaultValues.email}
        placeholder="bluebill1049@hotmail.com"
        type="email"
        {...register('email')}
      />

      <input type="submit" />
    </form>
  );
}

export default InitialFormState;
