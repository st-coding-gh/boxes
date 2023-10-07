import { deleteItem } from '../../database/database.js'

export default async function (req, res) {
  res.send(await deleteItem(req))
}
