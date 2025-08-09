import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DamageReportsService } from './damage-reports.service';

@Controller('damage-reports')
export class DamageReportsController {
  constructor(private svc: DamageReportsService) {}

  @Get(':bikeId')
  list(@Param('bikeId') bikeId: string) {
    return this.svc.listForBike(bikeId);
  }

  @Post()
  create(@Body() body: { bikeId: string; bookingId?: string; description?: string; photosBefore: string[]; photosAfter: string[] }) {
    return this.svc.create(body);
  }
}


