import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  // MVP: simulate payment success and record Payment + update booking
  async simulate(bookingId: string, provider: 'STRIPE' | 'PAYPAL' | 'GCASH' | 'MANUAL', amount: number) {
    const payment = await this.prisma.payment.create({
      data: {
        bookingId,
        provider,
        amount,
        status: 'SUCCESS',
      },
    });
    await this.prisma.booking.update({ where: { id: bookingId }, data: { status: 'CONFIRMED' } });
    return payment;
  }
}


