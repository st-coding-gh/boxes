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
    const box = target.innerHTML
    const inputElement = document.getElementById('input')
    const items = inputElement.textContent
    createItem(box, items)
    inputElement.innerHTML = ''
    setShowModal(false)
    setStatus({
      show: true,
      type: 'success',
      message: `добавлено: ${items}`,
    })
  }
}

async function createItem(box, items) {
  const url = 'http://localhost:3333/database/create-items'
  const urlReq = `${url}?box=${box}&items=${items}`
  const req = await fetch(urlReq)
  const res = await req.json()
}
