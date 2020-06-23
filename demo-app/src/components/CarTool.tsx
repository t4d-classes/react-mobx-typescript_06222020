import React, { FC, useState, ChangeEvent } from 'react';

import { Car } from '../models/car';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';

export interface CarToolProps {
  cars: Car[];
}

export const CarTool: FC<CarToolProps> = (props) => {

  const [ carForm, setCarForm ] = useState({
    make: '',
    model: '',
    year: 1900,
    color: '',
    price: 0,
  });

  const [ cars, setCars ] = useState(props.cars.slice());

  const change = (e: ChangeEvent<HTMLInputElement>) => {

    setCarForm({
      ...carForm,
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value) : e.target.value,
      // [ e.target.name ]: e.target.value,
    });

  };

  const addCar = () => {

    setCars(cars.concat({
      ...carForm,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    }));

  };

  console.log('rendering Car Tool', carForm, cars);


  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} />
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
        <button type="button" onClick={addCar}>Add Car</button>
      </form>
    </>
  );

};