export default async function getAll(url, setData) {
  const res = await fetch(url)
  const data = await res.json()
  setData(data)
}
