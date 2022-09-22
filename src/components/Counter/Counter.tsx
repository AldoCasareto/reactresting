import React, { useState } from 'react';

type Props = {};

const Counter = (props: Props) => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <label htmlFor='value'>Value</label>
      <input
        id='value'
        type='number'
        value={value}
        name='value'
        onChange={(e) => setValue(+e.target.value)}
      />
      <button onClick={() => setCount(value)}>Set</button>
    </>
  );
};

export default Counter;
