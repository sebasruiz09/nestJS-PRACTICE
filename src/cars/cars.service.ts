import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'honda',
      modal: 'toyota',
    },
    {
      id: 2,
      brand: 'suzuki',
      modal: 'jeep',
    },
  ];

  findAll() {
    return this.cars;
  }

  findId(id: number) {
    const car = this.cars.find((element) => element.id === id);
    if (!car) throw new NotFoundException();
    return car;
  }
}
