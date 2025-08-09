import { Module } from '@nestjs/common';
import { BikesService } from './bikes.service';
import { BikesController } from './bikes.controller';

@Module({
  providers: [BikesService],
  controllers: [BikesController],
})
export class BikesModule {}


