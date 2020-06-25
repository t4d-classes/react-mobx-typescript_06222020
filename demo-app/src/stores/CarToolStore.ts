import { observable, action } from 'mobx';

import { Car } from '../models/car';

export class CarToolStore {

  @observable
  cars: Car[] = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'white', price: 45000 },
    { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 145000 },
  ];

  @observable
  editCarId = -1;

  @action.bound
  appendCar(car: Car) {
    this.cars.push({
      ...car,
      id: Math.max(...this.cars.map(c => c.id!), 0) + 1,
    });
    this.editCarId = -1;
  }

  @action.bound
  replaceCar(car: Car) {
    const carIndex = this.cars.findIndex(c => c.id === car.id);
    this.cars[carIndex] = car;
    this.editCarId = -1;
  }

  @action.bound
  removeCar(carId: number) {
    const carIndex = this.cars.findIndex(c => c.id === carId);
    this.cars.splice(carIndex, 1);    
    this.editCarId = -1;
  }

  @action.bound
  editCar(carId: number) {
    this.editCarId = carId;
  }

  @action.bound
  cancelCar() {
    this.editCarId = -1;
  }

}