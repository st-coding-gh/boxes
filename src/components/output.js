import React from 'react'

export default function ({
  outputList,
  setShowModalItem,
  setDataItem,
  createList,
  outputClickHandler,
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
