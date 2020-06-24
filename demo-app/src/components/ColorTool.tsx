import React, { FC, useState } from 'react';

import { Color } from '../models/color';
import { useList } from '../hooks/useList';

import { ToolHeader } from './ToolHeader';
import { UnorderedList } from './UnorderedList';
import { ColorForm } from './ColorForm';

export interface ColorToolProps {
  colors: Color[];
}

export const ColorTool: FC<ColorToolProps> = (props) => {

  const [ colors, addColor, , removeColor ] = useList(props.colors.slice());

  return (
    <>
      <ToolHeader>
        <h1>
          Color Tool<br />
          <small>The best color tool ever!</small>
        </h1>
      </ToolHeader>
      <UnorderedList items={colors}
        contentFn={c => c.name + ' - ' + c.hexcode}
        onRemoveItem={itemKey => removeColor(Number(itemKey))} />
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </>
  );

};