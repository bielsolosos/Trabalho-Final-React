import { useState } from 'react'
import { CaixaTexto } from './components/CaixaDeTextos/CaixaTexto'
import { Botao } from './components/Botao/Botao'
import './App.css'
import { CarrinhoDeCompras } from './pages/CarrinhoDeCompras/CarrinhoDeCompras'
import Navbar from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='divFullScrean'>
    <Navbar/>
    <CarrinhoDeCompras/>
    </div>
  )
}

export default App
