import React from 'react'

export default function ({
  setShowModalItem,
  dataItem,
  setStatus,
  setOutputList,
  setData,
  getAll,
  url,
  deleteItem,
  itemDeleteHandler,
}) {
  return (
    <div
      id="modal-items"
      className="modal"
      onClick={e => {
        if (e.target.matches('.modal')) setShowModalItem(false)
      }}
    >
      <div>
        <div>{dataItem.item}</div>
        <button>update</button>
        <button
          onClick={() =>
            itemDeleteHandler(
              dataItem,
              setStatus,
              deleteItem,
              setShowModalItem,
              setOutputList,
              setData,
              url,
              getAll
            )
          }
        >
          delete
        </button>
      </div>
    </div>
  )
}
