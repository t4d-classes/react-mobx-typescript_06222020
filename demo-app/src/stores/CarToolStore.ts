import { observable, action } from 'mobx';

import { Car } from '../models/car';
import { ICarsService } from '../services/CarsService'

export class CarToolStore {

  constructor(private carsSvc: ICarsService) { }

  @observable
  cars: Car[] = [];

  @observable
  editCarId = -1;

  @action.bound
  async refreshCars() {
    this.cars = await this.carsSvc.allCars();
  }

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