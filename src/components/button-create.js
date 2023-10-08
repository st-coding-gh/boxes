import React, { useState } from 'react'
import Modal from './modal.js'
import Boxes from './boxes.js'

export default function ({ setStatus, fullMatch }) {
  const inputElem = document.getElementById('input')
  const [canCreate, setCanCreate] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button
        id="create" //
        onClick={() => {
          const input = inputElem.textContent
          permitToCreate(
            input,
            fullMatch,
            setStatus,
            setCanCreate,
            setShowModal
          ) //
        }}
      >
        положить в коробку
      </button>
      {showModal && (
        <Modal
          modalHandler={modalHandler}
          setShowModal={setShowModal}
          setStatus={setStatus}
        >
          <Boxes></Boxes>
        </Modal>
      )}
    </>
  )
}

// FUNCTIONS -------------------------------------------------------

function permitToCreate(
  input,
  fullMatch,
  setStatus,
  setCanCreate,
  setShowModal
) {
  input = input.trim()
  if (input === '') {
    setStatus({
      show: true,
      type: 'error',
      message: 'пустоту нельзя положить в коробку',
    })
  } else if (fullMatch) {
    setStatus({
      show: true,
      type: 'error',
      message: 'уже есть в коробках',
    })
  } else {
    setCanCreate(true)
    setShowModal(true)
  }
}

function modalHandler(target, setShowModal, setStatus) {
  if (target.matches('#modal')) {
    setShowModal(false)
  }
  if (target.matches('.boxes-li')) {
    // create const values
    const box = target.innerHTML
    const inputElement = document.getElementById('input')
    const items = inputElement.textContent

    //create item
    createItem(box, items).then(res => {
      console.log(res)
      const itemsRes = res.map(e => e.item).join(', ')
      const boxRes = res[0].box
      inputElement.innerHTML = ''
      setShowModal(false)
      setStatus({
        show: true,
        type: 'success',
        message: `в коробку ${boxRes} добавлено: ${itemsRes}`,
      })
    })
  }
}

async function createItem(box, items) {
  const url = 'http://localhost:3333/database/create-items'
  const urlReq = `${url}?box=${box}&items=${items}`
  const req = await fetch(urlReq)
  const res = await req.json()
  return res
}
