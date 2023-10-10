export default async function updateBox(url, id, box) {
  const urlReq = `${url}?id=${id}&box=${box}`
  const req = await fetch(urlReq)
  const res = await req.json()
  return res
}
