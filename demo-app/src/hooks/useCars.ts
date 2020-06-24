import { useState } from 'react';

import { Car } from '../models/car';

type AppendCar = (car: Car) => void;
type ReplaceCar = (car: Car) => void;
type RemoveCar = (carId: number) => void;

type UseCars = (initialCars: Car[]) => ([
  Car[], AppendCar, ReplaceCar, RemoveCar
]);

export const useCars: UseCars = (initialCars: Car[]) => {

  const [ cars, setCars ] = useState(initialCars);

  const appendCar = (car: Car) => {
    setCars(cars.concat({
      ...car,
      id: Math.max(...cars.map(c => c.id!), 0) + 1,
    }));
  };

  const replaceCar = (car: Car) => {
    const carIndex = cars.findIndex(c => c.id === car.id);
    const newCars = cars.concat();
    newCars[carIndex] = car;
    setCars(newCars);
  };

  const removeCar = (carId: number) => {
    setCars(cars.filter(c => c.id !== carId));
  };

  return [ cars, appendCar, replaceCar, removeCar ];

};