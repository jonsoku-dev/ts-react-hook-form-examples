import * as React from 'react';
import { useController, useForm } from 'react-hook-form';

function Input(props: any) {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input {...field} placeholder={props.name} />
      <p>{fieldState.isTouched && 'Touched'}</p>
      <p>{fieldState.isDirty && 'Dirty'}</p>
      <p>{fieldState.invalid ? 'invalid' : 'valid'}</p>
    </div>
  );
}

export default function HookController() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      FirstName: '',
    },
    mode: 'onChange',
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input control={control} name="FirstName" rules={{ required: true }} />
      <input type="submit" />
    </form>
  );
}
