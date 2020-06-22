import React from 'react';

import { Color } from '../models/color';

export const ColorTool = () => {

  const colors: Color[] = [
    { id: 1, name: 'red', hexcode: 'FF0000' }, 
    { id: 2, name: 'black', hexcode: '000000' }, 
    { id: 3, name: 'blue', hexcode: '0000FF' }, 
    { id: 4, name: 'periwinkle', hexcode: 'CCCCFF' }, 
  ];

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colors.map(color => <li key={color.id}>
          {color.name}
        </li>)}
      </ul>
    </>
  );

};