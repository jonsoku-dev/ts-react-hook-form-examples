import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { array, object, string } from 'yup';

const validationSchema = object().shape({
  questions: array()
    .of(
      object().shape({
        text: string().required('Some text is required'),
      }),
    )
    .required(),
});

function FieldArrayMinLength() {
  const {
    control,
    register,
    formState: { errors },
    clearErrors,
    setValue,
    unregister,
    handleSubmit,
    trigger,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions',
  });

  const isInitialRender = React.useRef(true);
  const appendQuestion = () => {
    append({
      text: '',
    });

    if (errors.questions?.type === 'min') {
      clearErrors('questions'); // always clear errors when a question is appended
    }
  };

  React.useEffect(() => {
    console.log('useEffect!! 배열이 추가되거나 제거됨!');
    if (!fields.length && !isInitialRender.current) {
      // 배열의 길이가 0일때 ?
      console.log('!fields.length && !isInitialRender.current');
      trigger('questions');
    }

    if (isInitialRender.current) {
      // 처음 랜더링되고나서 ... 바로 false 로 바꿔준다.
      console.log('isInitialRender.current', isInitialRender.current);
      isInitialRender.current = false;
    }
  }, [fields, register, setValue, unregister, trigger]);

  const onSubmit = (data: any, second: any) => console.log(data, second);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Yup Validation - Field Array</h1>
      {fields.map((question, questionIndex) => (
        <div key={question.id}>
          <input {...register(`questions[${questionIndex}].text`)} />
          <button
            type="button"
            onClick={() => {
              remove(questionIndex);
              trigger();
            }}
          >
            Remove question {question.id}
          </button>
        </div>
      ))}
      <button type="button" onClick={appendQuestion}>
        Add question
      </button>
      <input type="submit" />
    </form>
  );
}

export default FieldArrayMinLength;
