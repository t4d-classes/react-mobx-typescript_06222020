import React, { FC } from 'react';

import { Car } from '../models/car';

import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';

export interface CarTableProps {
  cars: Car[];
  editCarId: number;
  onEditCar: (carId: number) => void;
  onDeleteCar: (carId: number) => void;
}

export const CarTable: FC<CarTableProps> = ({
  cars, editCarId,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
}) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cars.map(car => car.id === editCarId
          ? <CarEditRow key={car.id} car={car} onSaveCar={() => null} onCancelCar={() => null} />
          : <CarViewRow key={car.id} car={car} onEditCar={editCar} onDeleteCar={deleteCar} />)}
      </tbody>
    </table>
  );

};