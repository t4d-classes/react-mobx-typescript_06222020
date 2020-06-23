import React, { FC, useState, ChangeEvent } from 'react';

import { Car } from '../models/car';

export interface CarEditRowProps {
  car: Car;
  onSaveCar: (car: Car) => void;
  onCancelCar: () => void;
}

export const CarEditRow: FC<CarEditRowProps> = ({
  car,
  onSaveCar,
  onCancelCar: cancelCar,
}) => {

  const [ carForm, setCarForm ] = useState({
    make: car.make,
    model: car.model,
    year: car.year,
    color: car.color,
    price: car.price,
  });

  const change = (e: ChangeEvent<HTMLInputElement>) => {

    setCarForm({
      ...carForm,
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value) : e.target.value,
    });
  };

  const saveCar = () => {
    onSaveCar({ ...carForm, id: car.id });
  };

  return (
    <tr>
      <td>{car.id}</td>
      <td>
        <input type="text" name="make"
          value={carForm.make} onChange={change} />
      </td>
      <td>
        <input type="text" name="model"
          value={carForm.model} onChange={change} />
      </td>
      <td>
        <input type="number" name="year"
          value={carForm.year} onChange={change} />
      </td>
      <td>
        <input type="text" name="color"
          value={carForm.color} onChange={change} />
      </td>
      <td>
        <input type="number" name="price"
          value={carForm.price} onChange={change} />
      </td>
      <td>
        <button type="button" onClick={saveCar}>Save</button>
        <button type="button" onClick={cancelCar}>Cancel</button>
      </td>
    </tr>
  );

};


