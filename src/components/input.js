import React from 'react'
import highlightFullMatches from '../functions/highlightFullMatches.js'

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
