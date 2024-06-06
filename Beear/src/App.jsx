import { useState } from 'react'
import { CaixaTexto } from './components/CaixaDeTextos/CaixaTexto'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img class='teste' src="/src/Images/Group_1.png" alt="" />
    <h1>Bear beer</h1>
    <CaixaTexto titulo={"Agora podemos reutilizar essa componente estilizada no código inteiro!"} />
    </>
  )
}

export default App
