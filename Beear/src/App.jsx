import { useState } from 'react'
import { CaixaTexto } from './components/CaixaDeTextos/CaixaTexto'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CaixaTexto titulo={"Agora podemos reutilizar essa componente estilizada no código inteiro!"} />
    </>
  )
}

export default App
