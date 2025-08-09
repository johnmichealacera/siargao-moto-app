import { Body, Controller, Param, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private payments: PaymentsService) {}

  @Post(':bookingId/simulate')
  simulate(@Param('bookingId') bookingId: string, @Body() body: { provider: 'STRIPE' | 'PAYPAL' | 'GCASH' | 'MANUAL'; amount: number }) {
    return this.payments.simulate(bookingId, body.provider, body.amount);
  }
}


