import { Injectable, NotFoundException } from '@nestjs/common';
// uuid is a package for generate unique id
import { v4 as uuid } from 'uuid';
import { car } from './interfaces/car.interface';

// decorator for injectable service
@Injectable()
export class CarsService {
  // cars array with car interface
  private cars: car[] = [
    {
      id: uuid(),
      brand: 'honda',
      model: 'toyota',
    },
    {
      // uuid is a function for generate unique id
      id: uuid(),
      brand: 'suzuki',
      model: 'jeep',
    },
  ];

  findAll() {
    return this.cars;
  }

  findId(id: string) {
    const car = this.cars.find((element) => element.id === id);
    // errors managent with nestjs provided exceptions
    if (!car) throw new NotFoundException();
    return car;
  }
}
