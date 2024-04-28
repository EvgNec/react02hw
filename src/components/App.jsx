import React from 'react';
import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';

export const App = () => {
  return (
    <>
      <h1>State component</h1>
      {/* <Counter initialValue={10} /> */}
      <Dropdown />
    </>
  );
};
