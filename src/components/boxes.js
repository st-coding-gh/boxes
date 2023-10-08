import React from 'react'

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

function getBoxNumbers() {
  const boxesNumbers = '1234'.split('').reduce((a, shelf) => {
    '123456'.split('').forEach(box => a.push(`${shelf}.${box}`))
    return a
  }, [])
  return boxesNumbers
}
