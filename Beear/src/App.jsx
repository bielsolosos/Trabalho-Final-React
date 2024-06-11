import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar/NavBar'
import {LoginCadastro} from './pages/loginCadastro/LoginCadastro'
import {Rotas} from './routes/Routes'
import { CartProvider } from './context/carrinhoContext'

function App() {
  const usuario = () => {localStorage('usuario','')};

  return (
    <CartProvider>
    <Navbar />
    <Rotas />
    </CartProvider>
  )
}

export default App
