import React, { useState } from 'react'
import permitToCreate from '../functions/permitToCreate.js'

export default function ({ setStatus, fullMatch, setData, setShowModal }) {
  const inputElem = document.getElementById('input')
  const [canCreate, setCanCreate] = useState(false)

  return (
    <>
      <button
        id="create"
        onClick={() => {
          const input = inputElem.textContent
          permitToCreate(
            input,
            fullMatch,
            setStatus,
            setCanCreate,
            setShowModal
          )
        }}
      >
        положить в коробку
      </button>
    </>
  )
}
