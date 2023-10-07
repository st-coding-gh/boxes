import { getAll } from '../../database/database.js'

export default async function (req, res) {
  res.send(await getAll())
}
