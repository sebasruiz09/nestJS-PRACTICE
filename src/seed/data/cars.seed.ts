import { car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

//cars seed
export const CARS_SEED: car[] = [
  {
    id: uuid(),
    brand: 'Audi',
    model: 'A4',
  },
  {
    id: uuid(),
    brand: 'Audi',
    model: 'A5',
  },
  {
    id: uuid(),
    brand: 'Audi',
    model: 'A6',
  },
  {
    id: uuid(),
    brand: 'ferrari',
    model: 'f430',
  },
  {
    id: uuid(),
    brand: 'mercedes',
    model: 'A180',
  },
];
