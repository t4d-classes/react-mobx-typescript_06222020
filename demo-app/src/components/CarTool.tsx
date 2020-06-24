import React, { FC, useState } from 'react';

import { Car } from '../models/car';
// import { useCars } from '../hooks/useCars';
import { useList } from '../hooks/useList';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';


export interface CarToolProps {
  cars: Car[];
}

export const CarTool: FC<CarToolProps> = (props) => {


  const [ cars, addCar, saveCar, deleteCar ] = useList(props.cars.slice());
  const [ editCarId, setEditCarId ] = useState(-1);

  const cancelEditCar = () => setEditCarId(-1);

  const addCarAndCancelEditCar = (car: Car) => {
    addCar(car);
    cancelEditCar();
  };

  const saveCarAndCancelEditCar = (car: Car) => {
    saveCar(car);
    cancelEditCar();
  };

  const deleteCarAndCancelEditCar = (carId: number) => {
    deleteCar(carId);
    cancelEditCar();
  };

  console.log('updated cars', cars);

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={setEditCarId} onDeleteCar={deleteCarAndCancelEditCar}
        onSaveCar={saveCarAndCancelEditCar} onCancelCar={cancelEditCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCarAndCancelEditCar} />
    </>
  );

};