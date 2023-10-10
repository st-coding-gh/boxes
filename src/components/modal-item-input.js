import React, { useEffect } from 'react'

export default function ({
  dataItem,
  highlightFullMatches,
  data,
  setFullMatchModalItem,
}) {
  return (
    <div
      id="module-item-input"
      className="input"
      contentEditable
      suppressContentEditableWarning={true}
      spellCheck={false}
      onInput={event => {
        const input = event.target.textContent
        highlightFullMatches(input, data, event, setFullMatchModalItem)
      }}
    >
      {dataItem.item}
    </div>
  )
}
