import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Mohsin from './Mohsin'

ReactDOM.createRoot(document.getElementById('root')).render(
  //? Using fragment to render multiple components 
  <>
    <App />
    <Mohsin />
  </>
)
