import React, { useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import DepthTwo from './DepthTwo';
import { DoubleNestedFormValues } from './types';

export interface DepthOneProps {}

const DepthOne: React.VFC<DepthOneProps> = () => {
  const formMethods = useFormContext<DoubleNestedFormValues>();

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
            <h4>depthOne title</h4>
            <input {...formMethods.register(`depthOne.${idx}.title` as const)} />
          </div>
          <div>
            <h4>depthOne desc</h4>
            <input {...formMethods.register(`depthOne.${idx}.desc` as const)} />
          </div>
          <DepthTwo idx={idx} />
        </div>
      ))}
      <button onClick={onClickAppend}>+</button>
    </div>
  );
};

export default DepthOne;
