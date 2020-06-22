import React, { FC } from 'react';

import { Color } from '../models/color';

export interface ColorToolProps {
  colors: Color[];
}

export const ColorTool: FC<ColorToolProps> = (props) => {

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {props.colors.map(color => <li key={color.id}>
          {color.name}
        </li>)}
      </ul>
    </>
  );

};