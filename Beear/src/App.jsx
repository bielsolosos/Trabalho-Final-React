import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar/NavBar'
import { Login } from './components/Login(Mock)/LoginApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='divFullScrean'>
    <Navbar/>
    <Login/>
    </div>
  )
}

export default App
