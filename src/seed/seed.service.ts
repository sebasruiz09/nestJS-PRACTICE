import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from '../brands/brands.service';
import { BRANDS_SEED } from './data/brand.seed';

@Injectable()
export class SeedService {
  constructor(
    // service injection in services
    private readonly carService: CarsService,
    private readonly brandService: BrandsService,
  ) {}

  allData() {
    this.carService.fillCarsWithSeed(CARS_SEED);
    this.brandService.fillBrandsWithSeed(BRANDS_SEED);
    return 'seed executed successfully';
  }
}
