import React from 'react'

export default function ({
  children,
  setShowModalItemBox,
  updateBox,
  url,
  dataItemBox,
  setOutputList,
  setStatus,
  getAll,
  setData,
}) {
  return (
    <div
      id="modal-box"
      className="modal"
      onClick={e => {
        if (e.target.matches('.modal')) {
          setShowModalItemBox(false)
        } else if (e.target.matches('.boxes-li')) {
          updateBox(url.updateItem, dataItemBox.id, e.target.textContent).then(
            res => {
              setShowModalItemBox(false)
              const inputElement = document.getElementById('input')
              inputElement.innerHTML = ''
              setOutputList(null)
              setStatus({
                show: true,
                type: 'success',
                message: `предмет перемещен из коробки ${dataItemBox.box} в ${e.target.textContent}`,
              })
              getAll(url.getAll, setData)
            }
          )
        }
      }}
    >
      {children}
    </div>
  )
}
