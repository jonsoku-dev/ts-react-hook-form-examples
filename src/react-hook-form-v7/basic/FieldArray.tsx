import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function createArrayWithNumbers(length: any) {
  return Array.from({ length }, (_, i) => i);
}

let renderCount = 0;

export default function FieldArray() {
  renderCount++;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [size, setSize] = useState(1);
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  console.log(errors);

  return (
    <div className="App">
      <div>render: {renderCount}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {createArrayWithNumbers(size).map((number) => {
          return (
            <div key={number}>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input {...register(`firstName[${number}]`, { required: true })} placeholder="first name" />
              </div>

              <div>
                <label htmlFor="lastName">Last Name</label>
                <input {...register(`lastName[${number}]`, { required: true })} placeholder="last name" />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input {...register(`email[${number}]`, { required: true })} placeholder="email" />
              </div>
              <hr />
            </div>
          );
        })}

        <button type="button" onClick={() => setSize(size + 1)}>
          Add Person
        </button>
        <br />
        <div style={{ color: 'red' }}>{Object.keys(errors).length > 0 && 'There are errors, check your console.'}</div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
