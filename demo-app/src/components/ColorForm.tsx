import React, { FC, useState, ChangeEvent } from 'react';

import { Color } from '../models/color';

export interface ColorFormProps {
  buttonText?: string;
  onSubmitColor: (color: Color) => void;
}

export const ColorForm: FC<ColorFormProps> = (props) => {

  const [ colorForm, setColorForm ] = useState({
    name: '',
    hexcode: '',
  });

  const change = (e: ChangeEvent<HTMLInputElement>) => {

    const newColorForm = {
      ...colorForm, // copy the properties from colorForm on to the new object
      [ e.target.name ]: e.target.value, // assign the value of the input to the hexcode property
    };

    setColorForm(/* new colorForm object */ newColorForm);

  };

  const submitColor = () => {
    props.onSubmitColor({ ...colorForm });
    setColorForm({
      name: '',
      hexcode: '',
    });
  };

  return (
    <form>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={colorForm.name} onChange={change} />
      </div>
      <div>
        <label>Hexcode:</label>
        <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
      </div>
      <button type="button" onClick={submitColor}>{props.buttonText}</button>
    </form>
  );

};

ColorForm.defaultProps = {
  buttonText: 'Submit Color',
};