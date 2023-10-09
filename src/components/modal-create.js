import React from 'react'
import createItem from '../functions/createItem.js'

export default function ({
  children,
  modalHandler,
  setShowModal,
  setStatus,
  setData,
}) {
  return (
    <div
      id="modal-create"
      className="modal"
      onClick={event => {
        modalHandler(event.target, setShowModal, setStatus, setData, createItem)
      }}
    >
      {children}
    </div>
  )
}
