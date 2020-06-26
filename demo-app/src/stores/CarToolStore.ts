import { observable, action, runInAction, flow } from 'mobx';

import { Car } from '../models/car';
import { ICarsService } from '../services/CarsService'

export class CarToolStore {

  constructor(private carsSvc: ICarsService) { }

  @observable
  cars: Car[] = [];

  @observable
  editCarId = -1;

  // non-flow
  // @action.bound
  // async refreshCars() {
  //   const cars = await this.carsSvc.allCars();

  //   runInAction(() => {
  //     this.cars = cars;
  //     this.editCarId = -1;
  //   });
  // }


  @action.bound
  refreshCars = flow(function* refreshCarsFlow(this: CarToolStore) {
    const cars = yield this.carsSvc.allCars();
    this.cars = cars;
    this.editCarId = -1;
  });

  @action.bound
  appendCar = flow(function* appendCarFlow(this: CarToolStore, car: Car) {
    yield this.carsSvc.appendCar(car);
    yield this.refreshCars();
  });

  @action.bound
  replaceCar = flow(function* replaceCarFlow(this: CarToolStore, car: Car) {
    yield this.carsSvc.replaceCar(car);
    yield this.refreshCars();
  });

  @action.bound
  removeCar = flow(function* removeCarFlow(this: CarToolStore, carId: number) {
    yield this.carsSvc.removeCar(carId);
    yield this.refreshCars();
  });

  @action.bound
  editCar(carId: number) {
    this.editCarId = carId;
  }

  @action.bound
  cancelCar() {
    this.editCarId = -1;
  }

}