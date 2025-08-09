import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BikesService {
  constructor(private prisma: PrismaService) {}

  list(params?: { type?: string }) {
    return this.prisma.bike.findMany({ where: { isActive: true, type: params?.type } });
  }

  get(id: string) {
    return this.prisma.bike.findUnique({ where: { id } });
  }

  create(ownerId: string, data: any) {
    return this.prisma.bike.create({ data: { ...data, ownerId } });
  }
}


