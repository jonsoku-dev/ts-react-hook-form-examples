import React from 'react';
import { useForm } from 'react-hook-form';

type FormInputs = {
  firstName: string;
  lastName: string;
};

// 중복검사

let renderCount = 0;

export default function Trigger() {
  renderCount++;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<FormInputs>();

  console.log(errors);

  return (
    <div>
      <div>render: {renderCount}</div>
      <form>
        <input {...register('firstName', { required: true })} />
        <input {...register('lastName', { required: true })} />
        <button
          type="button"
          onClick={() => {
            trigger('lastName');
          }}
        >
          Trigger
        </button>
        <button
          type="button"
          onClick={() => {
            trigger(['firstName', 'lastName']);
          }}
        >
          Trigger Multiple
        </button>
        <button
          type="button"
          onClick={() => {
            trigger();
          }}
        >
          Trigger All
        </button>
      </form>
    </div>
  );
}
