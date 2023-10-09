export default async function createItem(url, box, items) {
  const urlReq = `${url}?box=${box}&items=${items}`
  const req = await fetch(urlReq)
  const res = await req.json()
  return res
}
