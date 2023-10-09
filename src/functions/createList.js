import React from 'react'

export default function createList(outputList) {
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
