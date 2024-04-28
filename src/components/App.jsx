import React from 'react';
import Counter from "./Counter/Counter";

export const App = () => {
  return (
    <>
      <h1>State component</h1>
      <Counter initialValue={10} />
</>
  );
};
