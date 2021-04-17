import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { number, object, string } from 'yup';

enum TestEnum {
  YES = 'YES',
  NO = 'NO',
}

type FormValues = {
  test: keyof typeof TestEnum;
  firstName: string;
  lastName: string;
  age: number;
  website: string;
};

const SignupSchema = object().shape({
  firstName: string().required(),
  lastName: string().required(),
  age: number().required().positive().integer().max(100),
  website: string().required().url(),
});

export default function ValidationSchema() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    // reValidateMode: 'onSubmit',
    resolver: yupResolver(SignupSchema),
    defaultValues: {
      age: 0,
      website: '',
      lastName: '',
      firstName: '',
      test: TestEnum.YES,
    },
  });

  const onSubmit = (data: any, secondData: any) => {
    console.log(data, secondData);
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      console.log(errors);
      alert('error!!');
    }
  }, [errors]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p>Are you a Developer?</p>
        Yes
        <input type="radio" {...register('test')} value={TestEnum.YES} />
        No
        <input type="radio" {...register('test')} value={TestEnum.NO} />
      </div>
      <div>
        <p>First Name</p>
        <input type="text" {...register('firstName')} />
        {errors?.firstName?.message && <p style={{ color: 'red' }}>{errors?.firstName?.message}</p>}
      </div>
      <div>
        <p>Last Name</p>
        <input type="text" {...register('lastName')} />
        {errors?.lastName?.message && <p style={{ color: 'red' }}>{errors?.lastName?.message}</p>}
      </div>
      <div>
        <p>Age</p>
        <input
          {...register('age', {
            valueAsNumber: true,
          })}
        />
        {errors?.age?.message && <p style={{ color: 'red' }}>{errors?.age?.message}</p>}
      </div>
      <div>
        <p>Website</p>
        <input type="text" {...register('website')} />
        {errors?.website?.message && <p style={{ color: 'red' }}>{errors?.website?.message}</p>}
      </div>
      <input type="submit" />
    </form>
  );
}
