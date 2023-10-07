import { createItems } from '../../database/database.js'

export default async function (req, res) {
  res.send(await createItems(req))
}
