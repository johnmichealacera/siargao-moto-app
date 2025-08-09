import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  listForRenter(renterId: string) {
    return this.prisma.booking.findMany({ where: { renterId }, include: { bike: true } });
  }

  create(renterId: string, data: any) {
    return this.prisma.booking.create({ data: { ...data, renterId, status: 'PENDING' } });
  }
}


