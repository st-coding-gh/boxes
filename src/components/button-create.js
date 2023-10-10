import React from 'react'

export default function ({
  setStatus,
  fullMatch,
  setShowModal,
  permitToCreate,
}) {
  const inputElem = document.getElementById('input')

  return (
    <>
      <button
        id="create"
        onClick={() => {
          const input = inputElem.textContent
          permitToCreate(input, fullMatch, setStatus, setShowModal)
        }}
      >
        положить в коробку
      </button>
    </>
  )
}
