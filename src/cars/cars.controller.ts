import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  ParseIntPipe,
  Body,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllcars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  findCar(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findId(id);
  }

  @Post()
  createCar(@Body() body: any) {
    return body;
  }

  @Put()
  updateCar(@Body() body: any) {
    return body;
  }

  @Delete()
  deleteCar() {
    return {
      method: 'delete',
      message: 'car deleted',
      status: 200,
    };
  }
}
