import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './style.css'

// PAGES
import Search from './pages/Search.js'
import List from './pages/List.js'

const rootElem = document.getElementById('root')
const root = createRoot(rootElem)

root.render(
  <BrowserRouter>
    <nav id="nav">
      <h1>Boxes</h1>
      <Link to="/">search</Link>
      <Link to="/list">list</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/list" element={<List />} />
    </Routes>
  </BrowserRouter>
)
