import { useState } from 'react'
import { CaixaTexto } from './components/CaixaDeTextos/CaixaTexto'
import { Botao } from './components/Botao/Botao'
import './App.css'
import { CarrinhoDeCompras } from './pages/CarrinhoDeCompras/CarrinhoDeCompras'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CarrinhoDeCompras/>
    </>
  )
}

export default App
