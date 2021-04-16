import React from 'react';
import { useForm } from 'react-hook-form';

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

export default function BasicValidation() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName', { required: true, maxLength: 20 })} />
      <input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register('age', { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}

/*
 * Validation 의 종류
 * 1. required: true 인 경우 양식을 제출하기 전에 입력에 값이 있어야 함을 나타내는 부울입니다. errors객체 에서 오류 메시지를 반환하는 문자열을 할당 할 수 있습니다 .
 * 2. min: 이 입력에 허용 할 값의 최대 길이입니다.
 * 3. max: 이 입력에 허용 할 값의 최소 길이입니다.
 * 4. minLength: 이 입력에 허용 할 최대 값입니다.
 * 5. maxLength: 이 입력에 허용 할 최소값입니다.
 * 6. pattern: 입력에 대한 정규식 패턴입니다. 참고 : / g 플래그가있는 RegExp 개체는 일치가 발생한 lastIndex를 추적합니다.
 * 7. validation: 콜백 함수를 인수로 전달하여 유효성을 검사하거나 콜백 함수의 객체를 전달하여 모두 유효성을 검사 할 수 있습니다. (예제 참조) 참고 : 대한 또는 데이터 입력, 그것은 사용하는 것이 좋습니다의 다른 규칙의 대부분에 적용되는 유효성 검사 기능을 , 그리고 데이터 유형입니다.
 */
