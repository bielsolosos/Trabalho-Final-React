import { useState } from 'react'
import { CaixaTexto } from './components/CaixaDeTextos/CaixaTexto'
import { Botao } from './components/Botao/Botao'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img className='teste' src="/src/Images/Group_1.png" alt="" />
    <h1>Beear beer</h1>
    <CaixaTexto titulo={"Agora podemos reutilizar essa componente estilizada no código inteiro!"} placeholder={"Teste de Texto"} />
    <br />
    <Botao valor={"Teste"} title={'Teste'}/>
    </>
  )
}

export default App
