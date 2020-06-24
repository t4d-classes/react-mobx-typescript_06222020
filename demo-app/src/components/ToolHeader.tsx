import React, { FC } from 'react';

// type SomeFunc = (msg: string) => void;

// const doIt = (msg: string) => {
//   console.log(msg)
// };

// const add = (a: number, b: number) => a + b;

// doIt(String(add(1,2)));

export const ToolHeader: FC<{}> = (props) => {

  return (
    <header>
      {props.children}
    </header>
  );

};