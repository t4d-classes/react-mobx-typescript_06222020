import { Item } from './item';
 
export interface Color extends Item {
  name: string;
  hexcode: string;
}