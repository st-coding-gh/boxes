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
  //create
  const box = req.query.box
  const items = JSON.parse(req.query.items)
  const noItems = !items.length
  let error = false

  if (noItems) error = '`items` is missing in the query'
  if (error) return { error: error }

  const promises = items.map(item => {
    return prisma.items.create({
      data: {
        box: box,
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
  if (!req.query.item && !req.query.box)
    error = '`item` and `box` are missing in the query'
  if (error) return { error: error }

  //update
  const data = {}
  if (req.query.box) data.box = req.query.box
  if (req.query.item) data.item = req.query.item
  const id = +req.query.id

  return prisma.items.update({
    where: {
      id: id,
    },
    data: data,
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
