import React from 'react'

export default function ({ children, modalHandler, setShowModal, setStatus }) {
  return (
    <div
      id="modal"
      onClick={event => {
        modalHandler(event.target, setShowModal, setStatus)
      }}
    >
      {children}
    </div>
  )
}
