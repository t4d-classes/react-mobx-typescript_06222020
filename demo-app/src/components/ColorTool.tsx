import React, { FC } from 'react';

import { Color } from '../models/color';
import { useList } from '../hooks/useList';

import { ToolHeader } from './ToolHeader';
import { BuildUnorderedList } from './UnorderedList';
import { ColorForm } from './ColorForm';

export interface ColorToolProps {
  colors: Color[];
}

const UnorderedList = BuildUnorderedList<Color>();

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
        keyFn={c => c.id!}
        contentFn={c => c.name + ' - ' + c.hexcode}
        onRemoveItem={itemKey => removeColor(Number(itemKey))} />
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </>
  );

};