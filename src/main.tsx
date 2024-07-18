import React from 'react'
import ReactDOM from 'react-dom/client'
import Connexion from './Connexion.tsx'
import Inscription from './Inscription.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Connexion />
    <Inscription />

  </React.StrictMode>,
)

