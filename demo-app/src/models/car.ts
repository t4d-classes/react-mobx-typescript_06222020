import { Item } from './item';

export interface Car extends Item {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
}