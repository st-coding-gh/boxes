const url = '/database/getAllItems'
const input = document.getElementById('input')
const output = document.getElementById('output')

async function main() {
  const res = await fetch(url)
  const data = await res.json()

  input.addEventListener('input', e => {
    const inputValue = e.target.value
    const filtered = dataFilter(inputValue, data)
    renderOutput(filtered, inputValue)
  })

  function dataFilter(input, data) {
    const filtered = data.filter(e => e.item.match(new RegExp(input, 'gi')))
    const marked = filtered.map(e => {
      return {
        box: e.box,
        item: e.item.replace(
          new RegExp(input, 'gi'),
          '<span class="marked">$&</span>'
        ),
      }
    })
    return marked
  }

  function renderOutput(dataFiltered, input) {
    output.innerHTML = ''
    if (input === '') return
    dataFiltered.forEach(e => {
      const p = document.createElement('p')
      p.innerHTML = `${e.box} ${e.item}`
      output.append(p)
    })
  }
}

main()
