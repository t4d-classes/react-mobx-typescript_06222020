import React, { FC, useState, ChangeEvent } from 'react';

import { Car } from '../models/car';

export interface CarFormProps {
  buttonText?: string;
  onSubmitCar: (car: Car) => void;
}

export const CarForm: FC<CarFormProps> = (props) => {

  const [ carForm, setCarForm ] = useState({
    make: '',
    model: '',
    year: 1900,
    color: '',
    price: 0,
  });

  const change = (e: ChangeEvent<HTMLInputElement>) => {

    setCarForm({
      ...carForm,
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value) : e.target.value,
      // [ e.target.name ]: e.target.value,
    });


  }; // end of change

  const submitCar = () => {
    props.onSubmitCar({ ...carForm });
    setCarForm({
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    });
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


