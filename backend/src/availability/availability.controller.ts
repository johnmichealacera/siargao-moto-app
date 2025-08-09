import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AvailabilityService } from './availability.service';

@Controller('availability')
export class AvailabilityController {
  constructor(private availability: AvailabilityService) {}

  @Get(':bikeId')
  list(@Param('bikeId') bikeId: string) {
    return this.availability.listForBike(bikeId);
  }

  @Post(':bikeId')
  set(@Param('bikeId') bikeId: string, @Body() body: { date: string; available: boolean }) {
    return this.availability.set(bikeId, body.date, body.available);
  }
}


