// CSS
import './style.css'

// EXTERNAL
import { createRoot } from 'react-dom/client'
import React, { useEffect, useState } from 'react'

// COMPONENTS
import Input from './components/input.js'
import ButtonCreate from './components/button-create.js'
import Output from './components/output.js'
import Boxes from './components/boxes.js'
import ModalItem from './components/modal-item.js'
import ModalCreate from './components/button-create.js'

// FUNCTIONS
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

// CONSTS
import getURL from './consts/url.js'
const url = getURL()
const rootElem = document.getElementById('root')
const root = createRoot(rootElem)

root.render(<App />)

function App() {
  const [data, setData] = useState()
  const [outputList, setOutputList] = useState()
  const [fullMatch, setFullMatch] = useState(false)
  const [status, setStatus] = useState({
    show: false,
    type: 'error',
    message: null,
  })

  useEffect(() => {
    getAll(url.getAll, setData)
  }, [])

  return (
    <>
      <h1>Boxes</h1>
      <ButtonCreate
        setStatus={setStatus} //
        fullMatch={fullMatch} //
        setData={setData}
      />
      <Input
        filterDataByInput={filterDataByInput} //
        data={data} //
        setOutputList={setOutputList} //
        setStatus={setStatus} //
        setFullMatch={setFullMatch}
      />
      {status.show && (
        <p id="status" className={`status-${status.type}`}>
          {status.message}
        </p>
      )}
      <Output
        outputList={outputList}
        setStatus={setStatus}
        setOutputList={setOutputList}
        setData={setData}
      />
    </>
  )
}
