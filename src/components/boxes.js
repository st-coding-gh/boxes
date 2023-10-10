import React from 'react'

export default function ({ getBoxNumbers }) {
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
