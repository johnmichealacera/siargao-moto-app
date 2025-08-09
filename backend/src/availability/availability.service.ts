import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AvailabilityService {
  constructor(private prisma: PrismaService) {}

  listForBike(bikeId: string) {
    return this.prisma.availability.findMany({ where: { bikeId } });
  }

  set(bikeId: string, date: string, available: boolean) {
    const when = new Date(date);
    return this.prisma.$transaction(async (tx) => {
      const existing = await tx.availability.findFirst({ where: { bikeId, date: when } });
      if (existing) {
        return tx.availability.update({ where: { id: existing.id }, data: { available } });
      }
      return tx.availability.create({ data: { bikeId, date: when, available } });
    });
  }
}


