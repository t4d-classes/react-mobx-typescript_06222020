import React from 'react';

import { Color } from '../models/color';

export const ColorTool = () => {



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