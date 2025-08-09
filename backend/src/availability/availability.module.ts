import { Module } from '@nestjs/common';
import { AvailabilityService } from './availability.service';
import { AvailabilityController } from './availability.controller';

@Module({
  providers: [AvailabilityService],
  controllers: [AvailabilityController],
})
export class AvailabilityModule {}


