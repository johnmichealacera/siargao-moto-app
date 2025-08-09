import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DamageReportsService {
  constructor(private prisma: PrismaService) {}

  listForBike(bikeId: string) {
    return this.prisma.damageReport.findMany({ where: { bikeId } });
  }

  create(data: { bikeId: string; bookingId?: string; description?: string; photosBefore: string[]; photosAfter: string[] }) {
    return this.prisma.damageReport.create({ data });
  }
}


