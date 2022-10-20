import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seeds')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  // get all data from seed database
  @Get()
  runSeed() {
    return this.seedService.allData();
  }

  // delete test to seed item
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  // }
}
