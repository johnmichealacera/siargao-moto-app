import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { BookingsService } from './bookings.service';

@Controller('bookings')
export class BookingsController {
  constructor(private bookings: BookingsService) {}

  @Get()
  list(@Headers('x-user-id') renterId: string) {
    return this.bookings.listForRenter(renterId);
  }

  @Post()
  create(@Headers('x-user-id') renterId: string, @Body() body: any) {
    return this.bookings.create(renterId, body);
  }
}


