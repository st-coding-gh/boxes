import React from 'react'
import getBoxNumbers from '../functions/getBoxNumbers.js'

export default function () {
  const boxNumbers = getBoxNumbers()
  const boxes = []
  for (let i = 0; i < 24; i++) {
    boxes[i] = (
      <li className="boxes-li" key={i}>
        {boxNumbers[i]}
      </li>
    )
  }

  return <ul id="boxes">{boxes}</ul>
}
