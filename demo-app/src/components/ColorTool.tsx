import React, { FC, useState } from 'react';

import { Color } from '../models/color';

import { ToolHeader } from './ToolHeader';
import { ColorForm } from './ColorForm';

export interface ColorToolProps {
  colors: Color[];
}

export const ColorTool: FC<ColorToolProps> = (props) => {

  const [ colors, setColors ] = useState(props.colors.slice());

  const addColor = (color: Color) => {

    setColors(colors.concat({
      ...color,
      id: Math.max(...colors.map(c => c.id!), 0) + 1,
    }));

  };

  return (
    <>
      <ToolHeader />
      <ul>
        {colors.map(color => <li key={color.id}>
          {color.name}
        </li>)}
      </ul>
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </>
  );

};