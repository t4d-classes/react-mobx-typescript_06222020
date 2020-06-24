import React, { FC, useState } from 'react';

import { Color } from '../models/color';
import { useList } from '../hooks/useList' 

import { ToolHeader } from './ToolHeader';
import { ColorForm } from './ColorForm';

export interface ColorToolProps {
  colors: Color[];
}

export const ColorTool: FC<ColorToolProps> = (props) => {

  const [ colors, addColor, , removeColor ] = useList(props.colors.slice());

  return (
    <>
      <ToolHeader />
      <ul>
        {colors.map(color => <li key={color.id}>
          {color.name}
          <button type="button"
            onClick={() => removeColor(color.id!)}>X</button>
        </li>)}
      </ul>
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </>
  );

};