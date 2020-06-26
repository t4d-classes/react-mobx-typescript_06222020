
import { Car } from '../models/car';

export interface ICarsService {
  allCars: () => Promise<Car[]>;
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


}