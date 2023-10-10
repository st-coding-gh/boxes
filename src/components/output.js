import React from 'react'

export default function ({
  outputList,
  setShowModalItem,
  setDataItem,
  createList,
  outputClickHandler,
  setShowModalItemBox,
  setDataItemBox,
}) {
  return (
    <>
      <ul
        className="output-ul"
        onClick={e =>
          outputClickHandler(
            e,
            setShowModalItem,
            setDataItem,
            setShowModalItemBox,
            setDataItemBox
          )
        }
      >
        {createList(outputList)}
      </ul>
    </>
  )
}
