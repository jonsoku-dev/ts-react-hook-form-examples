import { Input } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';

interface IFormInputs {
  firstName: string;
  lastName: string;
}

let renderCount = 0;

export default function BasicValidationWithError() {
  renderCount++;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <div>render: {renderCount}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('firstName', { required: true })} />
        {errors.firstName && 'First name is required'}
        <Input {...register('lastName', { required: true })} />
        {errors.lastName && 'Last name is required'}
        <input type="submit" />
      </form>
    </div>
  );
}
