import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar/NavBar'
import { Login } from './components/Login(Mock)/LoginApi'
import LoginCadastro from './pages/loginCadastro/LoginCadastro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='divFullScrean'>
    <Navbar/>
    <LoginCadastro/>
    </div>
  )
}

export default App
