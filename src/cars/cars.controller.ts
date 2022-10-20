import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Body,
  ParseUUIDPipe,
  // UsePipes,
  // ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { updateCarDto } from './dto/update-car.dto';

// decorator controller is a controller for routes and methods
@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  // decorator for get API REQUEST
  @Get()
  getAllcars() {
    return this.carsService.findAll();
  }

  // :id is a parameter for the route
  @Get(':id')
  // parseUUID for UUID V4
  findCar(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.carsService.findId(id);
  }

  // decorator for post API REQUEST
  @Post()
  createCar(@Body() carDto: CreateCarDto) {
    // pase data transfer object to service
    return this.carsService.createCar(carDto);
  }

  // decorator Patch for update partial data
  @Patch(':id')
  updatePartialCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDto: updateCarDto,
  ) {
    return this.carsService.updateCar(updateDto);
  }

  // decorator for put API REQUEST
  @Put()
  updateCar(@Body() body: any) {
    return body;
  }

  // decorator for delete API REQUEST
  @Delete()
  deleteCar() {
    return {
      method: 'delete',
      message: 'car deleted',
      status: 200,
    };
  }
}
