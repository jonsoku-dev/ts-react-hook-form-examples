import React, { useCallback } from 'react';
import { useFieldArray } from 'react-hook-form';
import { useForm } from 'react-hook-form';

/**
 * https://react-hook-form.com/api/usefieldarray
 * https://codesandbox.io/s/react-hook-form-nestedarray-empty-issuev7-setvalue-f0uhl
 * https://codesandbox.io/s/react-hook-form-usefieldarray-nested-arrays-forked-xf574?file=/src/fieldArray.js:657-663
 */
type ContentType = {
  title: string;
  desc: string;
};

type FormTypes = {
  parentTitle: string;
  child: ContentType[];
};

const defaultValues: FormTypes = {
  parentTitle: '',
  child: [],
};

let renderCount = 0;

function FieldArrayAdvanced() {
  renderCount++;

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>({
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'child',
  });

  const handleClickAppend = useCallback(() => {
    append({
      title: '',
      desc: '',
    });
  }, [append]);

  const onSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);

  console.log(errors);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h4>ParentTitle</h4>
          <input {...register('parentTitle')} />
        </div>
        {fields.length > 0 && (
          <div>
            <h4>child</h4>
            {fields.map((field, idx) => (
              <div style={{ margin: '16px', padding: '16px', border: '1px solid black' }} key={field.id}>
                <div>
                  <div>
                    <h5>{idx}</h5>
                    <button onClick={() => remove(idx)}>Remove</button>
                  </div>
                  <p>child title</p>
                  {/* casting !!! */}
                  <input {...register(`child.${idx}.title` as const)} defaultValue={field?.title} />
                </div>
                <div>
                  <p>child desc</p>
                  <input {...register(`child.${idx}.desc` as const)} defaultValue={field?.desc} />
                </div>
              </div>
            ))}
          </div>
        )}
        <button onClick={handleClickAppend}>+</button>
        <button type="submit">submit!</button>
      </form>
      <span className="counter">Render Count: {renderCount}</span>
    </div>
  );
}

export default React.memo(FieldArrayAdvanced);
