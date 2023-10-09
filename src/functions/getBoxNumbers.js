export default function getBoxNumbers() {
  const boxesNumbers = '1234'.split('').reduce((a, shelf) => {
    '123456'.split('').forEach(box => a.push(`${shelf}.${box}`))
    return a
  }, [])
  return boxesNumbers
}
