import React, { useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { DoubleNestedWithValidationFormValues } from './types';

export interface DepthTwoProps {
  idx: number;
}

const DepthTwo: React.VFC<DepthTwoProps> = (props) => {
  const formMethods = useFormContext<DoubleNestedWithValidationFormValues>();
  const {
    trigger,
    formState: { errors },
  } = formMethods;

  const { fields, append, remove } = useFieldArray({
    control: formMethods.control,
    name: `depthOne.${props.idx}.depthTwo` as 'depthOne.0.depthTwo',
  });

  const onClickAppend = useCallback(() => {
    append({
      language: '',
      text: '',
    });
    trigger();
  }, [append, trigger, props.idx]);

  const onClickRemove = useCallback(
    (removeIdx: number) => {
      remove(removeIdx);
      trigger();
    },
    [remove, trigger, props.idx],
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
            <h4>depthTwo title</h4>
            <input
              {...formMethods.register(`depthOne.${props.idx}.depthTwo.${idx}.language` as const, {
                required: `depthTwo (${props.idx} / ${idx}) language is required`,
              })}
              placeholder={`depthTwo (${props.idx} / ${idx})`}
            />
            {errors?.depthOne?.[props.idx]?.depthTwo?.[idx]?.language?.message && (
              <p>{errors?.depthOne?.[props.idx]?.depthTwo?.[idx]?.language?.message}</p>
            )}
          </div>
          <div>
            <h4>depthTwo desc</h4>
            <input
              {...formMethods.register(`depthOne.${props.idx}.depthTwo.${idx}.text` as const, {
                required: `depthTwo (${props.idx} / ${idx}) text is required`,
              })}
              placeholder={`depthTwo (${props.idx} / ${idx})`}
            />
            {errors?.depthOne?.[props.idx]?.depthTwo?.[idx]?.text?.message && (
              <p>{errors?.depthOne?.[props.idx]?.depthTwo?.[idx]?.text?.message}</p>
            )}
          </div>
        </div>
      ))}
      <button onClick={onClickAppend}>+</button>
    </div>
  );
};

export default DepthTwo;
