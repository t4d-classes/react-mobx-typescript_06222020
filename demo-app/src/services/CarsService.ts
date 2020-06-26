
import { Car } from '../models/car';

export interface ICarsService {
  allCars: () => Promise<Car[]>;
  appendCar: (car: Car) => Promise<Car>;
  replaceCar: (car: Car) => Promise<Car>;
  removeCar: (carId: number) => Promise<void>;
}


export class CarsService implements ICarsService {

  // private baseUrl: string;

  // constructor(baseUrl: string) {
  //   this.baseUrl = baseUrl;
  // }

  constructor(private baseUrl: string) { }

  async allCars() {

    const res = await fetch(this.baseUrl + '/cars');
    const cars = await res.json();

    return cars;
  }

  async appendCar(car: Car) {

    const res = await fetch(this.baseUrl + '/cars', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    });

    const addedCar = await res.json();

    return addedCar;
  }

  async replaceCar(car: Car) {

    const res = await fetch(this.baseUrl + '/cars/' + encodeURIComponent(car.id!), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    });

    const replacedCar = await res.json();

    return replacedCar;
  }

  async removeCar(carId: number) {

    await fetch(this.baseUrl + '/cars/' + encodeURIComponent(carId), {
      method: 'DELETE',
    });

    return;
  }
 
}