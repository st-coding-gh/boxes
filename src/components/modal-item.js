import React, { useState } from 'react'
import getAll from '../functions/getAll.js'
import getURL from '../consts/url.js'
const url = getURL()
import deleteItem from '../functions/deleteItem.js'
import itemDeleteHandler from '../functions/itemDeleteHandler.js'

export default function ({
  setShowModalItem,
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
