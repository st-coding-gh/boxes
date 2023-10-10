export default async function deleteItem(url, dataItem) {
  const urlReq = `${url}?id=${dataItem.id}`
  const req = await fetch(urlReq)
  const res = await req.json()
  return res
}
