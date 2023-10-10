export default function filterDataByInput(value, data, setOutputList) {
  const values = value.toLowerCase().split(';')
  const lastValue = values.at(-1).trim()
  if (lastValue === '') {
    setOutputList(null)
    return
  }
  const filteredData = data.filter(e => {
    const lastValueEscaped = lastValue.replace(
      /[\[\]\{\}\(\)\\\^\$\.\|\?\*\+]/g,
      '\\$&'
    )
    return e.item.match(new RegExp(lastValueEscaped, 'gi'))
  })
  setOutputList(filteredData)
}
