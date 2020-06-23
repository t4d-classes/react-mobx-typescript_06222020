import React, { FC, useState, ChangeEvent } from 'react';

import { Car } from '../models/car';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';


export interface CarToolProps {
  cars: Car[];
}

export const CarTool: FC<CarToolProps> = (props) => {

  const [ cars, setCars ] = useState(props.cars.slice());
  const [ editCarId, setEditCarId ] = useState(-1);

  const addCar = (car: Car) => {

    setCars(cars.concat({
      ...car,
      id: Math.max(...cars.map(c => c.id!), 0) + 1,
    }));

  };

  const deleteCar = (carId: number) => {
    setCars(cars.filter(c => c.id !== carId));
  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={setEditCarId} onDeleteCar={deleteCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );

};