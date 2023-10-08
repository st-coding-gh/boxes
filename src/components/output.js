import React, { useEffect, useState } from 'react'
import ModalItem from './modal-item.js'

export default function ({ outputList, setStatus, setOutputList, setData }) {
  const [modalItem, setModalItem] = useState(false)
  const [dataItem, setDataItem] = useState('initial')

  return (
    <>
      <ul
        className="output-ul"
        onClick={e => outputClickHandler(e, setModalItem, setDataItem)}
      >
        {createList(outputList)}
      </ul>
      {modalItem && (
        <ModalItem
          setModalItem={setModalItem}
          dataItem={dataItem}
          setStatus={setStatus}
          setOutputList={setOutputList}
          setData={setData}
        ></ModalItem>
      )}
    </>
  )
}

function createList(outputList) {
  if (outputList) {
    const newOutputList = outputList.map((e, i) => {
      return (
        <li className="output-li" key={i}>
          <button className="output-box" data-id={e.id}>
            {e.box}
          </button>
          <button className="output-item" data-id={e.id}>
            {e.item}
          </button>
        </li>
      )
    })
    return newOutputList
  }
}

function outputClickHandler(e, setModalItem, setDataItem) {
  console.log(e.target)
  if (e.target.matches('.output-item')) {
    setModalItem(true)
    setDataItem({
      item: e.target.textContent,
      id: e.target.dataset.id,
    })
  }
}
