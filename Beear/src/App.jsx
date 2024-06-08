import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar/NavBar'
import {LoginCadastro} from './pages/loginCadastro/LoginCadastro'
import {Rotas} from './routes/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><Navbar /><Rotas /></>
  )
}

export default App
