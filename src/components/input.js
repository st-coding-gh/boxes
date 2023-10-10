import React, { useEffect } from 'react'

export default function Input({
  filterDataByInput,
  data,
  setOutputList,
  setStatus,
  setFullMatch,
  highlightFullMatches,
}) {
  useEffect(() => {
    const input = document.getElementById('input')
    input.focus()
  }, [])

  return (
    <div
      id="input"
      className="input"
      contentEditable
      spellCheck={false}
      onInput={event => {
        const value = event.target.textContent
        filterDataByInput(value, data, setOutputList)
        highlightFullMatches(value, data, event, setFullMatch)
        setStatus({ show: false, type: null, message: null })
      }}
    ></div>
  )
}
