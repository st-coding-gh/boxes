import React, { useState } from 'react'
import ModalCreate from './modal-create.js'
import Boxes from './boxes.js'
import getAll from '../functions/getAll.js'
import permitToCreate from '../functions/permitToCreate.js'
import modalHandler from '../functions/modalHandler.js'
import createItem from '../functions/createItem.js'

export default function ({ setStatus, fullMatch, setData }) {
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
        <ModalCreate
          modalHandler={modalHandler}
          setShowModal={setShowModal}
          setStatus={setStatus}
          setData={setData}
        >
          <Boxes></Boxes>
        </ModalCreate>
      )}
    </>
  )
}
