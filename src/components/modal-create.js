import React from 'react'

export default function ({
  children,
  modalHandler,
  setShowModal,
  setStatus,
  setData,
  createItem,
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
