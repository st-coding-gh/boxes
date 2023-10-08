import './style.css'
const url = 'http://localhost:3333/database/get-all'
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

// editable tests

const editable = document.getElementById('editable')
editable.addEventListener('input', e => {
  const input = e.target.textContent
  const inputModified = input.replace(/\d/gi, '<span class="marked">$&</span>')
  e.target.innerHTML = inputModified + "<span id='end'></span>"

  //move cursor to the end of the div input
  const selection = window.getSelection()
  selection.removeAllRanges()
  const range = document.createRange()
  range.setStart(end, 0)
  selection.addRange(range)
})
