import React from 'react';
import { useForm } from 'react-hook-form';

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

interface IFormInput {
  firstName: string;
  gender: GenderEnum;
}

export default function Register() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name</label>
      <input {...register('firstName')} />
      <label htmlFor="gender">Gender Selection</label>
      <select {...register('gender')}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
}

/*
 * https://react-hook-form.com/api/useform/register
 * React Hook Form 의 핵심 개념 중 하나는 제어되지 않은 구성 요소를 후크에 넣는 것입니다.
 * 이렇게하면 양식 유효성 검사와 제출 모두에 해당 값을 사용할 수 있습니다. register
 * 참고 : 각 필드는 name 을 필수로 입력해야 한다.
 */
