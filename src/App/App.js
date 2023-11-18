import React, { useEffect, useState } from 'react'
import { URL_DB, BOX_NUMBERS } from './consts.js'
import boxIcon from '../assets/images/box-icon.svg'

export default function () {
  const [allData, setAllData] = useState([])
  const [input, setInput] = useState([])
  const [flag, setFlag] = useState()
  const [showModalCreate, setShowModalCreate] = useState(false)
  const [rawInput, setRawInput] = useState('')

  if (flag) {
    switch (flag) {
      case 'created':
        console.log(flag)
        setFlag(undefined)
        setRawInput('')
        break
    }
  }

  useEffect(() => {
    getAllData(URL_DB.getAll, setAllData)
    // fetchDatabase(URL_DB.getAll).then(data => setAllData(data))
  }, [])

  return (
    <>
      <h1>Boxes</h1>

      <Input
        rawInput={rawInput}
        setRawInput={setRawInput}
        setInput={setInput}
        setShowModalCreate={setShowModalCreate}
        setFlag={setFlag}
        setAllData={setAllData}
        input={input}
        showModalCreate={showModalCreate}
      />

      <Status input={input} allData={allData} />

      <FilteredData input={input} allData={allData} setAllData={setAllData} />
    </>
  )
}

// C O M P O N E N T S =======================================

function CreateModal({
  setAllData,
  setFlag,
  showModalCreate,
  setShowModalCreate,
  input,
  setInput,
}) {
  const [boxSelected, setBoxSelected] = useState()

  if (boxSelected) {
    console.log(boxSelected)
    createItemsInBox(boxSelected, input).then(() => {
      getAllData(URL_DB.getAll, setAllData)
      setInput([])
    })
    setBoxSelected(undefined)
  }

  return (
    <>
      {showModalCreate && (
        <Modal setShowModal={setShowModalCreate}>
          <ButtonsOfAllBoxes
            setShowModal={setShowModalCreate}
            setBoxSelected={setBoxSelected}
            setFlag={setFlag}
            flagValue={'created'}
          />
        </Modal>
      )}
    </>
  )
}

function ButtonsOfAllBoxes({
  flagValue,
  setFlag,
  setShowModal,
  setBoxSelected,
}) {
  return (
    <ul id="boxes">
      {BOX_NUMBERS.map((e, i) => (
        <li
          key={i}
          onClick={e => {
            const box = e.target.textContent
            setBoxSelected(box)
            setShowModal(false)
            setFlag(flagValue)
          }}
        >
          {e}
        </li>
      ))}
    </ul>
  )
}

function Modal({ children, setShowModal }) {
  return (
    <div
      className="modal"
      onClick={e => {
        if (e.target.matches('.modal')) {
          setShowModal(false)
        }
      }}
    >
      {children}
    </div>
  )
}

function Status({ input, allData }) {
  const status = getStatus(input, allData)
  return (
    <div className="status-container">
      <p className={`status-${status.type}`} id="status">
        {status.message}
      </p>
    </div>
  )
}

function Input({
  setFlag,
  setAllData,
  input,
  showModalCreate,
  rawInput,
  setRawInput,
  setInput,
  setShowModalCreate,
}) {
  return (
    <div className="input-container">
      <input
        value={rawInput}
        id="input"
        onChange={e => {
          const value = e.target.value
          const inputSplitted = parseInputToArray(value)
          setInput(inputSplitted)
          setRawInput(value)
        }}
      ></input>
      <ItemCreateButton
        setAllData={setAllData}
        setFlag={setFlag}
        showModalCreate={showModalCreate}
        input={input}
        setInput={setInput}
        setShowModalCreate={setShowModalCreate}
      />
    </div>
  )
}

function ItemCreateButton({
  setAllData,
  setFlag,
  showModalCreate,
  input,
  setInput,
  setShowModalCreate,
}) {
  return (
    <>
      <button
        className="input-button"
        onClick={() => {
          setShowModalCreate(true)
        }}
      >
        <img className="input-box-icon" src={boxIcon}></img>
      </button>
      <CreateModal
        setAllData={setAllData}
        setFlag={setFlag}
        showModalCreate={showModalCreate}
        setShowModalCreate={setShowModalCreate}
        input={input}
        setInput={setInput}
      />
    </>
  )
}

function FilteredData({ input, allData, setAllData }) {
  if (input === '') return
  const filtered = filterAllData(input, allData)?.map((e, i) => {
    return (
      <li key={i} className="output-li">
        <BoxChangeButton box={e.box} id={e.id} setAllData={setAllData} />
        <ItemChangeButton item={e.item} id={e.id} setAllData={setAllData} />
      </li>
    )
  })
  return <ul className="output-ul">{filtered}</ul>
}

function BoxChangeButton({ box, id, setAllData }) {
  const [showModalUpdateBox, setShowModalUpdateBox] = useState(false)
  const [boxSelected, setBoxSelected] = useState()

  if (boxSelected) {
    updateBox(id, boxSelected).then(() => {
      getAllData(URL_DB.getAll, setAllData)
    })
    setBoxSelected(undefined)
  }
  return (
    <>
      <button
        className="output-box"
        onClick={() => {
          setShowModalUpdateBox(true)
        }}
      >
        {box}
      </button>
      {showModalUpdateBox && (
        <Modal setShowModal={setShowModalUpdateBox}>
          <ButtonsOfAllBoxes
            flagValue={'updateBox'}
            setFlag={e => e}
            setShowModal={setShowModalUpdateBox}
            setBoxSelected={setBoxSelected}
          />
        </Modal>
      )}
    </>
  )
}

function ItemChangeButton({ item, id, setAllData }) {
  const [showModalChangeItem, setShowModalChangeItem] = useState(false)
  const [inputChange, setInputChange] = useState()
  return (
    <>
      <button
        className="output-item"
        onClick={() => {
          setShowModalChangeItem(true)
        }}
      >
        {item}
      </button>
      {showModalChangeItem && (
        <Modal setShowModal={setShowModalChangeItem}>
          <div className="item-change">
            <div className="item-change-input-container">
              <input
                value={inputChange || item}
                autoFocus={true}
                onChange={e => {
                  setInputChange(e.target.value)
                }}
              />
            </div>
            <div className="item-change-buttons-container">
              <ItemUpdateButton
                id={id}
                inputChange={inputChange}
                setAllData={setAllData}
                setShowModalChangeItem={setShowModalChangeItem}
                setInputChange={setInputChange}
              />
              <ItemDeleteButton
                id={id}
                setAllData={setAllData}
                setShowModalChangeItem={setShowModalChangeItem}
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

function ItemUpdateButton({
  inputChange,
  id,
  setAllData,
  setShowModalChangeItem,
  setInputChange,
}) {
  return (
    <button
      onClick={() => {
        setShowModalChangeItem(false)
        updateItem(id, inputChange).then(() => {
          getAllData(URL_DB.getAll, setAllData)
        })
        setInputChange(null)
      }}
    >
      update
    </button>
  )
}

function ItemDeleteButton({ id, setAllData, setShowModalChangeItem }) {
  return (
    <button
      onClick={() => {
        deleteItem(id).then(() => {
          getAllData(URL_DB.getAll, setAllData)
        })
        setShowModalChangeItem(false)
      }}
    >
      delete
    </button>
  )
}

// F U N C T I O N S =========================================

async function updateItem(id, input) {
  const updateURL = URL_DB.updateItem
  updateURL.searchParams.delete('id')
  updateURL.searchParams.delete('item')
  updateURL.searchParams.append('id', id)
  updateURL.searchParams.append('item', input)
  const result = await fetchDatabase(updateURL)
  console.log(result)
  return result
}

async function deleteItem(id) {
  const deleteURL = URL_DB.deleteItem
  deleteURL.searchParams.delete('id')
  deleteURL.searchParams.append('id', id)
  const result = await fetchDatabase(deleteURL)
  console.log(result)
  return result
}

async function updateBox(id, box) {
  const updateURL = URL_DB.updateItem
  updateURL.searchParams.delete('id')
  updateURL.searchParams.delete('box')
  updateURL.searchParams.append('id', id)
  updateURL.searchParams.append('box', box)
  const result = await fetchDatabase(updateURL)
  console.log(result)
  return result
}

async function createItemsInBox(box, input) {
  input = JSON.stringify(input)
  const createURL = URL_DB.createItem
  createURL.searchParams.delete('box')
  createURL.searchParams.delete('items')
  createURL.searchParams.append('box', box)
  createURL.searchParams.append('items', input)
  const result = await fetchDatabase(createURL)
  console.log(result)
  return result
}

async function fetchDatabase(url) {
  const res = await fetch(url)
  const json = await res.json()
  return json
}

async function getAllData(url, setState) {
  fetchDatabase(url).then(data => setState(data))
}

function filterAllData(input, allData) {
  const inputLastItem = input.at(-1)?.toLowerCase()
  const filter = allData?.filter(e => {
    const elemModified = e.item.trim().toLowerCase()
    return elemModified.includes(inputLastItem)
  })
  return filter
}

function getIfExistsInDB(input, allData) {
  const inputIsNotEmpty = input.length
  let inputLowerCase, exists
  if (inputIsNotEmpty) {
    inputLowerCase = input.map(e => e.toLowerCase())
    exists = allData.filter(e => {
      const item = e.item.toLowerCase()
      return inputLowerCase.includes(item)
    })
  }
  return exists?.map(e => e.item)
}

function getStatus(input, allData) {
  const existsList = getIfExistsInDB(input, allData)
  const existInDB = existsList?.length
  const inputIsEmpty = !input.length
  let status
  if (inputIsEmpty)
    return {
      message: 'введите один или несколько предметов через , или ;',
      type: 'success',
    }
  else if (existInDB) {
    status = {
      message: `${existsList} есть в коробках`,
      type: 'error',
    }
  } else {
    status = {
      message: 'можно положить в коробку',
      type: 'success',
    }
  }

  return status
}

function parseInputToArray(value) {
  return value
    .split(/[,;]/)
    .map(e => e.trim())
    .filter(e => e != '')
}
