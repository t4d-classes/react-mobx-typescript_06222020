import React, { FC } from 'react';

import { Car } from '../models/car';

import { CarViewRow } from './CarViewRow';

export interface CarTableProps {
  cars: Car[];
}

export const CarTable: FC<CarTableProps> = (props) => {

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
        </tr>
      </thead>
      <tbody>
        {props.cars.map(car =>
          <CarViewRow key={car.id} car={car} />)}
      </tbody>
    </table>
  );

};