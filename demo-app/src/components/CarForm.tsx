import React, { FC, useState, ChangeEvent } from 'react';

import { Car } from '../models/car';
import { useForm } from '../hooks/useForm';

export interface CarFormProps {
  buttonText?: string;
  onSubmitCar: (car: Car) => void;
}

export const CarForm: FC<CarFormProps> = (props) => {

  const [ carForm, change, resetCarForm ] = useForm({
    make: '',
    model: '',
    year: 1900,
    color: '',
    price: 0,
  });

  const submitCar = () => {
    props.onSubmitCar({ ...carForm });
    resetCarForm();
  }

  return (
    <form>
      <div>
        <label>Make:</label>
        <input type="text" name="make"
          value={carForm.make} onChange={change} />
      </div>
      <div>
        <label>Model:</label>
        <input type="text" name="model"
          value={carForm.model} onChange={change} />
      </div>
      <div>
        <label>Year:</label>
        <input type="number" name="year"
          value={carForm.year} onChange={change} />
      </div>
      <div>
        <label>Color:</label>
        <input type="text" name="color"
          value={carForm.color} onChange={change} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" name="price"
          value={carForm.price} onChange={change} />
      </div>
      <button type="button" onClick={submitCar}>{props.buttonText}</button>
    </form>
  );

};

CarForm.defaultProps = {
  buttonText: 'Submit Car',
};


