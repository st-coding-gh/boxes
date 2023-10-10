import React from 'react'

export default function ({
  permitToUpdate,
  fullMatchModalItem,
  dataItem,
  setStatusModalItem,
  setStatus,
  setShowModalItem,
  getAll,
  url,
  setData,
  updateItem,
  setOutputList,
}) {
  return (
    <button
      onClick={() => {
        const input = document.getElementById('module-item-input')
        permitToUpdate(
          fullMatchModalItem,
          dataItem,
          input.textContent,
          setStatusModalItem,
          setStatus,
          setShowModalItem,
          getAll,
          url,
          setData,
          updateItem,
          setOutputList
        ) //
      }}
    >
      update
    </button>
  )
}
