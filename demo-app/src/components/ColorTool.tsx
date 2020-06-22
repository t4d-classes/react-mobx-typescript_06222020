import React, { FC, useState, ChangeEvent } from 'react';

import { Color } from '../models/color';

export interface ColorToolProps {
  colors: Color[];
}

export const ColorTool: FC<ColorToolProps> = (props) => {

  // colorForm is the current state value
  // setColorForm is the function to update the state and re-render
  const [ colorForm, setColorForm ] = useState({
    name: '',
    hexcode: '',
  } /* initial state value */);

  const [ colors, setColors ] = useState(props.colors.concat());

  const change = (e: ChangeEvent<HTMLInputElement>) => {

    setColorForm(/* new colorForm object */{
      ...colorForm, // copy the properties from colorForm on to the new object
      [ e.target.name ]: e.target.value, // assign the value of the input to the hexcode property
    })

  };

  const addColor = () => {

    setColors(colors.concat({
      ...colorForm,
      id: Math.max(...colors.map(c => c.id), 0) + 1,
    }));

  };

  console.log('rendering Color Tool');

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
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={colorForm.name} onChange={change} />
        </div>
        <div>
          <label>Hexcode:</label>
          <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
        </div>
        <button type="button" onClick={addColor}>Add Color</button>
      </form>
    </>
  );

};