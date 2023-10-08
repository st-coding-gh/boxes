import React, { useState } from 'react'
import { getAll } from '../index.js'

export default function ({
  setModalItem,
  dataItem,
  setStatus,
  setOutputList,
  setData,
}) {
  return (
    <div
      id="modal-items"
      className="modal"
      onClick={e => {
        if (e.target.matches('.modal')) setModalItem(false)
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
              setModalItem,
              setOutputList,
              setData
            )
          }
        >
          delete
        </button>
      </div>
    </div>
  )
}

function itemDeleteHandler(
  dataItem,
  setStatus,
  deleteItem,
  setModalItem,
  setOutputList,
  setData
) {
  deleteItem(dataItem).then(res => {
    const inputElement = document.getElementById('input')
    inputElement.innerHTML = ''
    setModalItem(false)
    setStatus({
      show: true,
      type: 'success',
      message: `предмет удален: ${res.item}`,
    })
    setOutputList(null)
    getAll(setData)
  })
}

async function deleteItem(dataItem) {
  const url = 'http://localhost:3333/database/delete-item'
  const urlReq = `${url}?id=${dataItem.id}`
  const req = await fetch(urlReq)
  const res = await req.json()
  return res
}
