import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getAllItems() {
  return await prisma.items.findMany({
    select: {
      box: true,
      item: true,
    },
    orderBy: {
      box: 'asc',
    },
  })
}
