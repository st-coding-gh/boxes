import React, { useEffect, useState } from 'react'
import ModalItem from './modal-item.js'
import createList from '../functions/createList.js'
import outputClickHandler from '../functions/outputClickHandler.js'

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
