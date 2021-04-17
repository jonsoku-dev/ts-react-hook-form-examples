import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';

// Dirty 는 한번 이상 입력이 된 필드를 뜻하는 것이다.
// Dirty 와 Touched 의 차이점이란?
// Dirty:  전류 제어입력에 대한 더티 상태. (?) 사용자가 입력한 순간 활성화 -> validation 에 적합
// Touched: 현재 제어 입력을위한 터치 상태. (?) 사용자가 입력을 마치고 다른 곳으로 포커싱되었을때 활성화 -> 그럼 얘는 뭐에쓰지?

export default function DirtyTouchedSubmit() {
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
  });
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  console.log(formState);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p>First name</p>
        <input type="text" {...register('firstName')} />
      </div>
      <div>
        <p>Last name</p>
        <input type="text" {...register('lastName')} />
      </div>
      <div>
        <p>Email</p>
        <input type="text" {...register('email')} />
      </div>
      <div>
        <p>Mobile number</p>
        <input type="tel" {...register('mobileNumber')} />
      </div>
      <div>
        <p>Title</p>
        <select {...register('title')}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>
      </div>

      <div>
        <p>Are you a developer?</p>
        <input type="radio" value="Yes" {...register('developer')} />
        <input type="radio" value="No" {...register('developer')} />
      </div>

      <pre>{JSON.stringify(formState, null, 2)}</pre>

      <input type="submit" />
    </form>
  );
}
