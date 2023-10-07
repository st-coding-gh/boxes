import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getAll() {
  return await prisma.items.findMany({
    orderBy: {
      box: 'asc',
    },
  })
}

export async function createItems(req) {
  //errors
  let error = false
  if (!req.query.items) error = '`items` is missing in the query'
  if (!req.query.box) error = '`box` is missing in the query'
  if (error) return { error: error }

  //create
  const items = req.query.items.split(';')
  const promises = items.map(item => {
    return prisma.items.create({
      data: {
        box: req.query.box,
        item: item,
      },
    })
  })

  return await Promise.all(promises)
}

export async function updateItem(req) {
  //errors
  let error = false
  if (!req.query.id) error = '`id` is missing in the query'
  if (!req.query.item) error = '`item` is missing in the query'
  if (!req.query.box) error = '`box` is missing in the query'
  if (error) return { error: error }

  //update

  return prisma.items.update({
    where: {
      id: +req.query.id,
    },
    data: {
      box: req.query.box,
      item: req.query.item,
    },
  })
}

export async function deleteItem(req) {
  //errors
  let error = false
  if (!req.query.id) error = '`id` is missing in the query'
  if (error) return { error: error }

  //update

  return prisma.items.delete({
    where: {
      id: +req.query.id,
    },
  })
}
