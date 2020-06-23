import React, { FC } from 'react';

import { Car } from '../models/car';

export interface CarViewRowProps {
  car: Car;
}

export const CarViewRow: FC<CarViewRowProps> = (props) => {
  return (
    <tr>
      <td>{props.car.id}</td>
      <td>{props.car.make}</td>
      <td>{props.car.model}</td>
      <td>{props.car.year}</td>
      <td>{props.car.color}</td>
      <td>{props.car.price}</td>
    </tr>
  );
};