import React, { useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import DepthTwo from './DepthTwo';
import { DoubleNestedWithValidationFormValues } from './types';

export interface DepthOneProps {}

const DepthOne: React.VFC<DepthOneProps> = () => {
  const formMethods = useFormContext<DoubleNestedWithValidationFormValues>();
  const {
    trigger,
    formState: { errors },
  } = formMethods;

  const { fields, append, remove } = useFieldArray({
    control: formMethods.control,
    name: 'depthOne',
  });

  const onClickAppend = useCallback(() => {
    append({
      title: '',
      desc: '',
      depthTwo: [
        {
          language: '',
          text: '',
        },
      ],
    });
    trigger();
  }, [append, trigger]);

  const onClickRemove = useCallback(
    (removeIdx: number) => {
      remove(removeIdx);
      trigger();
    },
    [remove, trigger],
  );

  return (
    <div>
      {fields.map((field, idx) => (
        <div key={field.id} style={{ margin: '16px', padding: '16px', border: '1px solid black' }}>
          <div>
            <span>{idx}</span>
            <button onClick={() => onClickRemove(idx)}>x</button>
          </div>
          <div>
            <h4>depthOne title</h4>
            <input
              {...formMethods.register(`depthOne.${idx}.title` as const, {
                required: `depthOne (${idx}) title is required`,
              })}
            />
            {errors?.depthOne?.[idx]?.title?.message && <p>{errors?.depthOne?.[idx]?.title?.message}</p>}
          </div>
          <div>
            <h4>depthOne desc</h4>
            <input
              {...formMethods.register(`depthOne.${idx}.desc` as const, {
                required: `depthOne (${idx}) desc is required`,
              })}
            />
            {errors?.depthOne?.[idx]?.title?.message && <p>{errors?.depthOne?.[idx]?.title?.message}</p>}
          </div>
          <DepthTwo idx={idx} />
        </div>
      ))}
      <button onClick={onClickAppend}>+</button>
    </div>
  );
};

export default DepthOne;
