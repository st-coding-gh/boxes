import { getAllItems } from '../../database/database.js'

export default async function (req, res) {
  res.send(await getAllItems())
}
