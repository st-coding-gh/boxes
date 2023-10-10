export default function highlightFullMatches(value, data, event, setFullMatch) {
  //reset fullMatch indicator
  setFullMatch(false)
  document.getElementById('end')?.remove()

  // prepare values and data for comparison
  const values = value.split(';')
  const dataJoined = ';' + data.map(e => e.item).join(';') + ';'

  // wrap all matches into spans
  const valueMod = values
    .map(e => {
      const eEscaped = e
        .replace(/[\[\]\{\}\(\)\\\^\$\.\|\?\*\+]/g, '\\$&')
        .trim()
      if (dataJoined.match(new RegExp(`(?<=;)${eEscaped}(?=;)`, 'i'))) {
        setFullMatch(true)
        return `<span class="highlighted">${e}</span>`
      } else return e
    })
    .join(';')

  // replace user input with modified matches
  event.target.innerHTML = valueMod + '<span id="end"></span>'

  // move cursor to the end of the div input
  const end = document.getElementById('end')
  const selection = window.getSelection()
  selection.removeAllRanges()
  const range = document.createRange()
  range.setStart(end, 0)
  selection.addRange(range)
}
