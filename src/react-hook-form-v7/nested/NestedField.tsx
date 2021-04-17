import React from 'react';
import { Path, useForm, UseFormRegister } from 'react-hook-form';

// https://codesandbox.io/s/react-hook-form-adapting-existing-form-ts-uzfxm

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  title: string;
  developer: string;
};

type FormSectionType = {
  register: UseFormRegister<FormValues>;
};

function FormSection1({ register }: FormSectionType) {
  return (
    <>
      <div>
        <label htmlFor="nested-first-name">First name</label>
        <input id="nested-first-name" type="text" {...register('firstName', { required: true, maxLength: 80 })} />
      </div>
      <div>
        <label htmlFor="nested-last-name">Last name</label>
        <input id="nested-last-name" type="text" {...register('lastName', { required: true, maxLength: 100 })} />
      </div>
    </>
  );
}

function FormSection2({ register }: FormSectionType) {
  return (
    <>
      <div>
        <label htmlFor="nested-email">Email</label>
        <input
          id="nested-email"
          type="text"
          {...register('email', {
            required: true,
            pattern: /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
      </div>
      <div>
        <label htmlFor="nested-mobile-number">Mobile number</label>
        <input
          id="nested-mobile-number"
          type="tel"
          {...register('mobileNumber', {
            required: true,
            maxLength: 11,
            minLength: 8,
          })}
        />
      </div>
      <div>
        <label htmlFor="nested-title">Title</label>
        <select id="nested-email" {...register('title', { required: true })}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>
      </div>

      <div>
        <label htmlFor="nested-developer">Are you a developer?</label>
        <input type="radio" value="Yes" {...register('developer', { required: true })} />
        <input type="radio" value="No" {...register('developer', { required: true })} />
      </div>
    </>
  );
}

let renderCount = 0;

export default function NestedField() {
  renderCount++;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobileNumber: '',
      title: 'Mr',
      developer: 'Yes',
    },
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };
  console.log(errors);

  return (
    <div>
      <div>render: {renderCount}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormSection1 register={register} />
        <FormSection2 register={register} />
        <input type="submit" />
      </form>
    </div>
  );
}
