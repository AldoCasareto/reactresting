import React from 'react';
import { CounterTwoProps } from './counter2.types';

const Counter2 = ({
  handleIncrement,
  count,
  handleDecrement,
}: CounterTwoProps) => {
  return (
    <>
      <h1>Counter2</h1>
      <p>{count}</p>
      {handleIncrement && <button onClick={handleIncrement}>INCREMENT</button>}
      {handleDecrement && <button onClick={handleDecrement}>DECREMENT</button>}
    </>
  );
};

export default Counter2;
