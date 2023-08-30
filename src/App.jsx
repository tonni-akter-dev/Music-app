import { useState } from 'react'
import './index.css'
import Navigation from './components/Navigation/Navigation'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='container'>
      <Navigation/>

    </div>
  )
}

export default App
