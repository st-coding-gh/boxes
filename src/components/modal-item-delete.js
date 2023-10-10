import React from 'react'
export default function ({
  itemDeleteHandler,
  dataItem,
  setStatus,
  deleteItem,
  setShowModalItem,
  setOutputList,
  setData,
  url,
  getAll,
}) {
  return (
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
  )
}
