import { Module } from '@nestjs/common';
import { DamageReportsService } from './damage-reports.service';
import { DamageReportsController } from './damage-reports.controller';

@Module({
  providers: [DamageReportsService],
  controllers: [DamageReportsController],
})
export class DamageReportsModule {}


