import React, { useEffect, useState } from 'react'
import createList from '../functions/createList.js'
import outputClickHandler from '../functions/outputClickHandler.js'

export default function ({
  outputList,
  setStatus,
  setOutputList,
  setData,
  setShowModalItem,
  setDataItem,
}) {
  return (
    <>
      <ul
        className="output-ul"
        onClick={e => outputClickHandler(e, setShowModalItem, setDataItem)}
      >
        {createList(outputList)}
      </ul>
    </>
  )
}
