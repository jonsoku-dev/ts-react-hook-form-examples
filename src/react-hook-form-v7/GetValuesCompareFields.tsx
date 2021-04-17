import React from 'react';
import { useForm } from 'react-hook-form';

export default function GetValuesCompareFields() {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="App">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div>password</div>
        <input {...register('password', { required: 'Password is required!' })} />
        {errors.password && <p style={{ color: 'white' }}>{errors.password.message}</p>}
        <div>Confirm Password: </div>
        <input
          {...register('passwordConfirmation', {
            required: 'Please confirm password!',
            validate: {
              // type
              matchesPreviousPassword: (value) => {
                const { password } = getValues();
                return password === value || 'Passwords should match!'; // errors.passwordConfirmation.message
              },
            },
          })}
        />
        {errors.passwordConfirmation && <p style={{ color: 'black' }}>{errors.passwordConfirmation.message}</p>}
        <div>
          <button type="submit">Trigger</button>
        </div>
      </form>
    </div>
  );
}
