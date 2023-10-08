import React from 'react'

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
        modalHandler(event.target, setShowModal, setStatus, setData)
      }}
    >
      {children}
    </div>
  )
}
