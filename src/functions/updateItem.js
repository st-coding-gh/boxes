export default async function updateItem(url, id, item) {
  const urlReq = `${url}?id=${id}&item=${item}`
  const req = await fetch(urlReq)
  const res = await req.json()
  return res
}
