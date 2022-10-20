import { Injectable, NotFoundException } from '@nestjs/common';
// uuid is a package for generate unique id
import { v4 as uuid } from 'uuid';
import { car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { updateCarDto } from './dto/update-car.dto';

// decorator for injectable service
@Injectable()
export class CarsService {
  // cars array with car interface
  private cars: car[] = [
    {
      id: '40958092-7eea-4692-8f86-3aab9e1604bc',
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

  // destructuring for create car
  //  createCar({ brand, model }: CreateCarDto) {
  //   const car: car = {
  //     id: uuid(),
  //     brand: brand,
  //     model: model,
  //   };
  //   return car;
  // }

  // sparcing for create car
  createCar(createCarDto: CreateCarDto) {
    const car: car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(car);
    return car;
  }

  updateCar(updateCarDto: updateCarDto) {
    const id: string = updateCarDto.id;
    this.cars.map((element) => {
      if (element.id === id) {
        console.log(element);
        const car: car = {
          id,
          ...element,
          ...updateCarDto,
        };
        console.log(car);
      }
    });
  }
}
