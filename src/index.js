import './style.css'
import { createRoot } from 'react-dom/client'
import React, { useEffect, useState } from 'react'
import Input from './components/input.js'
import Button from './components/button-create.js'
import Output from './components/output.js'

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
    getAll(setData)
  }, [])

  return (
    <>
      <h1>Boxes</h1>
      <Button
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
      {/* <ul className="output-list">{outputList}</ul> */}
    </>
  )
}

// FUNCTIONS

function filterDataByInput(value, data, setOutputList) {
  const values = value.toLowerCase().split(';')
  const lastValue = values.at(-1).trim()
  if (lastValue === '') {
    setOutputList(null)
    return
  }
  const filteredData = data.filter(e => {
    const lastValueEscaped = lastValue.replace(
      /[\[\]\{\}\(\)\\\^\$\.\|\?\*\+]/g,
      '\\$&'
    )
    return e.item.match(new RegExp(lastValueEscaped, 'gi'))
  })
  // const newOutputList = filteredData.map((e, i) => {
  //   return <li key={i}>{`${e.box} ${e.item}`}</li>
  // })
  setOutputList(filteredData)
}

export async function getAll(setData) {
  const url = 'http://localhost:3333/database/get-all'
  const res = await fetch(url)
  const data = await res.json()
  setData(data)
}
