import React from 'react'

export default function ({ children, setShowModalItem }) {
  return (
    <div
      id="modal-items"
      className="modal"
      onClick={e => {
        if (e.target.matches('.modal')) setShowModalItem(false)
      }}
    >
      <div>{children}</div>
    </div>
  )
}
