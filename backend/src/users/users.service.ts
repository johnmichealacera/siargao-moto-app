import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findMe(userId: string) {
    return this.prisma.user.findUnique({ where: { id: userId } });
  }

  upsertFromFirebase(uid: string, email: string, displayName?: string, photoUrl?: string) {
    return this.prisma.user.upsert({
      where: { email },
      create: { providerId: uid, email, displayName, photoUrl, role: 'RENTER' },
      update: { providerId: uid, email, displayName, photoUrl },
    });
  }
}


