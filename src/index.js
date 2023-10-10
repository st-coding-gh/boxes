// EXTERNAL
import { createRoot } from 'react-dom/client'
import React, { useEffect, useState } from 'react'

// CSS --------------------------------------------------------------
import './style.css'

// COMPONENTS -------------------------------------------------------
import Input from './components/input.js'
import ButtonCreate from './components/button-create.js'
import Output from './components/output.js'
import Boxes from './components/boxes.js'
import ModalItem from './components/modal-item.js'
import ModalCreate from './components/modal-create.js'
import ModalItemInput from './components/modal-item-input.js'
import ModalItemDelete from './components/modal-item-delete.js'
import ModalItemUpdate from './components/modal-item-update.js'
import ModalBox from './components/modal-box.js'

// FUNCTIONS --------------------------------------------------------
import createItem from './functions/createItem.js'
import createList from './functions/createList.js'
import deleteItem from './functions/deleteItem.js'
import filterDataByInput from './functions/filterDataByInput.js'
import getAll from './functions/getAll.js'
import getBoxNumbers from './functions/getBoxNumbers.js'
import highlightFullMatches from './functions/highlightFullMatches.js'
import itemDeleteHandler from './functions/itemDeleteHandler.js'
import modalHandler from './functions/modalHandler.js'
import outputClickHandler from './functions/outputClickHandler.js'
import permitToCreate from './functions/permitToCreate.js'
import permitToUpdate from './functions/permitToUpdate.js'
import updateItem from './functions/updateItem.js'
import updateBox from './functions/updateBox.js'

// CONSTS -----------------------------------------------------------
import getURL from './consts/url.js'
const url = getURL()
const rootElem = document.getElementById('root')
const root = createRoot(rootElem)

root.render(<App />)

function App() {
  //STATES ----------------------------------------------------------
  const [data, setData] = useState()
  const [outputList, setOutputList] = useState()
  const [fullMatch, setFullMatch] = useState(false)
  const [fullMatchModalItem, setFullMatchModalItem] = useState(true)
  const [status, setStatus] = useState({
    show: false,
    type: 'error',
    message: null,
  })
  const [statusModalItem, setStatusModalItem] = useState({
    show: false,
    type: 'error',
    message: null,
  })
  const [showModal, setShowModal] = useState(false)
  const [showModalItem, setShowModalItem] = useState(false)
  const [dataItem, setDataItem] = useState()
  const [dataItemBox, setDataItemBox] = useState()
  const [showModalItemBox, setShowModalItemBox] = useState(false)

  useEffect(() => {
    getAll(url.getAll, setData)
  }, [])

  // ASSEMBLING ------------------------------------------------------
  return (
    <>
      <h1>Boxes</h1>

      <ButtonCreate
        setStatus={setStatus}
        fullMatch={fullMatch}
        setShowModal={setShowModal}
        permitToCreate={permitToCreate}
      />

      {showModal && (
        <ModalCreate
          modalHandler={modalHandler}
          setShowModal={setShowModal}
          setStatus={setStatus}
          setData={setData}
          createItem={createItem}
        >
          <Boxes getBoxNumbers={getBoxNumbers}></Boxes>
        </ModalCreate>
      )}

      <Input
        filterDataByInput={filterDataByInput}
        data={data}
        setOutputList={setOutputList}
        setStatus={setStatus}
        setFullMatch={setFullMatch}
        highlightFullMatches={highlightFullMatches}
      />
      <div className="status-container">
        {status.show && (
          <p id="status" className={`status-${status.type}`}>
            {status.message}
          </p>
        )}
      </div>

      <Output
        outputList={outputList}
        setDataItem={setDataItem}
        setShowModalItem={setShowModalItem}
        createList={createList}
        outputClickHandler={outputClickHandler}
        setShowModalItemBox={setShowModalItemBox}
        setDataItemBox={setDataItemBox}
      />

      {showModalItem && (
        <ModalItem
          setShowModalItem={setShowModalItem} //
        >
          <div>
            <ModalItemInput
              dataItem={dataItem}
              highlightFullMatches={highlightFullMatches}
              data={data}
              setFullMatchModalItem={setFullMatchModalItem}
            />
          </div>
          <div className="status-container">
            {statusModalItem.show && (
              <p
                id="modal-item-status"
                className={`status-${statusModalItem.type}`}
              >
                {statusModalItem.message}
              </p>
            )}
          </div>
          <div className="modal-item-button-container">
            <ModalItemUpdate
              permitToUpdate={permitToUpdate}
              fullMatchModalItem={fullMatchModalItem}
              dataItem={dataItem} //
              setStatusModalItem={setStatusModalItem}
              setStatus={setStatus}
              setShowModalItem={setShowModalItem}
              getAll={getAll}
              url={url}
              setData={setData}
              updateItem={updateItem}
              setOutputList={setOutputList}
            />
            <ModalItemDelete
              itemDeleteHandler={itemDeleteHandler}
              dataItem={dataItem}
              setStatus={setStatus}
              deleteItem={deleteItem}
              setShowModalItem={setShowModalItem}
              setOutputList={setOutputList}
              setData={setData}
              url={url}
              getAll={getAll}
            />
          </div>
        </ModalItem>
      )}

      {showModalItemBox && (
        <ModalBox
          setShowModalItemBox={setShowModalItemBox}
          updateBox={updateBox}
          url={url}
          dataItemBox={dataItemBox}
          setOutputList={setOutputList}
          setStatus={setStatus}
          getAll={getAll}
          setData={setData}
        >
          <Boxes getBoxNumbers={getBoxNumbers} />
        </ModalBox>
      )}
    </>
  )
}
