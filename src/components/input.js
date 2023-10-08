import React from 'react'

export default function Input({
  filterDataByInput,
  data,
  setOutputList,
  setStatus,
  setFullMatch,
}) {
  return (
    <div
      id="input"
      contentEditable
      onInput={event => {
        const value = event.target.textContent
        filterDataByInput(value, data, setOutputList)
        highlightFullMatches(value, data, event, setFullMatch)
        setStatus({ show: false, type: null, message: null })
      }}
    ></div>
  )
}

function highlightFullMatches(value, data, event, setFullMatch) {
  //reset fullMatch indicator
  setFullMatch(false)

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
  const selection = window.getSelection()
  selection.removeAllRanges()
  const range = document.createRange()
  range.setStart(end, 0)
  selection.addRange(range)
}
