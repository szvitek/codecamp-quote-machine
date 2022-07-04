import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/**
 * react runs effects 2x in strict mode in development
 * https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
