import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Categories
  const bikeCategory = await prisma.category.upsert({
    where: { name: 'Motorcycles' },
    update: {},
    create: { name: 'Motorcycles', type: 'BIKE' },
  });

  // Users
  const owner = await prisma.user.upsert({
    where: { email: 'owner@example.com' },
    update: {},
    create: { email: 'owner@example.com', role: 'OWNER', displayName: 'Local Owner' },
  });

  const renter = await prisma.user.upsert({
    where: { email: 'renter@example.com' },
    update: {},
    create: { email: 'renter@example.com', role: 'RENTER', displayName: 'Island Visitor' },
  });

  // Bikes
  await prisma.bike.createMany({
    data: [
      {
        title: 'Yamaha Mio Scooter',
        description: 'Reliable automatic scooter for island cruising',
        type: 'Scooter',
        dailyPrice: 500,
        weeklyPrice: 3000,
        monthlyPrice: 10000,
        latitude: 9.789,
        longitude: 126.165,
        photos: ['https://images.unsplash.com/photo-1541443131876-44b0144902af?q=80&w=1200'],
        ownerId: owner.id,
        categoryId: bikeCategory.id,
      },
      {
        title: 'Honda Click 125i',
        description: 'Fuel efficient and smooth ride',
        type: 'Scooter',
        dailyPrice: 550,
        latitude: 9.85,
        longitude: 126.07,
        photos: ['https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200'],
        ownerId: owner.id,
        categoryId: bikeCategory.id,
      },
    ],
    skipDuplicates: true,
  });

  console.log('Seeded sample data. Owner:', owner.id, 'Renter:', renter.id);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


