import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { BikesModule } from './bikes/bikes.module';
import { BookingsModule } from './bookings/bookings.module';
import { PaymentsModule } from './payments/payments.module';
import { AvailabilityModule } from './availability/availability.module';
import { DamageReportsModule } from './damage-reports/damage-reports.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    UsersModule,
    BikesModule,
    BookingsModule,
    PaymentsModule,
    AvailabilityModule,
    DamageReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
