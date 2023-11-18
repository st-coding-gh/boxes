import { createRoot } from 'react-dom/client'
import React, { useEffect, useState } from 'react'
import App from './App/App.js'
import './style.css'

const rootElem = document.getElementById('root')
const root = createRoot(rootElem)
root.render(<App />)
