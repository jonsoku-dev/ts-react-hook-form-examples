import React, { useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { DoubleNestedFormValues } from './types';

export interface DepthTwoProps {
  idx: number;
}

const DepthTwo: React.VFC<DepthTwoProps> = (props) => {
  const formMethods = useFormContext<DoubleNestedFormValues>();

  const { fields, append, remove } = useFieldArray({
    control: formMethods.control,
    name: `depthOne.${props.idx}.depthTwo` as 'depthOne.0.depthTwo',
  });

  const onClickAppend = useCallback(() => {
    append({
      language: '',
      text: '',
    });
  }, []);

  return (
    <div>
      {fields.map((field, idx) => (
        <div key={field.id} style={{ margin: '16px', padding: '16px', border: '1px solid black' }}>
          <div>
            <span>{idx}</span>
            <button onClick={() => remove(idx)}>x</button>
          </div>
          <div>
            <h4>depthTwo title</h4>
            <input {...formMethods.register(`depthOne.${props.idx}.depthTwo.${idx}.language` as const)} />
          </div>
          <div>
            <h4>depthTwo desc</h4>
            <input {...formMethods.register(`depthOne.${props.idx}.depthTwo.${idx}.text` as const)} />
          </div>
        </div>
      ))}
      <button onClick={onClickAppend}>+</button>
    </div>
  );
};

export default DepthTwo;
