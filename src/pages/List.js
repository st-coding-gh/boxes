import React from 'react'
import { useState, useEffect } from 'react'
import { URL_DB, BOX_NUMBERS } from '../consts/consts.js'

export default function () {
  const [list, setList] = useState({})

  useEffect(() => {
    getList(URL_DB.getAll, setList)
  }, [])

  return (
    <>
      <BoxesList list={list} />
    </>
  )
}

// C O M P O N E N T S =============================================
function BoxesList({ list }) {
  const boxes = Object.keys(list)
  const boxesLi = boxes.map((box, i) => {
    return (
      <li key={i}>
        {box}
        {<ItemsList box={box} list={list} />}
      </li>
    )
  })
  return <ul>{boxesLi}</ul>
}

function ItemsList({ box, list }) {
  const items = list[box].map((e, i) => {
    return <li key={i}>{e}</li>
  })
  return <ul className="list-ul">{items}</ul>
}

// F U N C T I O N S ===============================================

async function getList(url, setList) {
  const allData = await fetchDatabase(url)
  const list = getListObject(BOX_NUMBERS)
  allData.forEach(e => {
    list[e.box].push(e.item)
  })
  setList(list)
}

function getListObject(BOX_NUMBERS) {
  const list = {}
  BOX_NUMBERS.forEach(e => {
    list[e] = []
  })
  return list
}

async function fetchDatabase(url) {
  const res = await fetch(url)
  const json = await res.json()
  return json
}
