import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tarea from './Componentes/Tarea'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='aplicacion-tareas'>
      <h1>Escribe tus tareas</h1>
      <div className='tareas'>
        <h2>Mis tareas</h2>
        <Tarea />
      </div>
      </div>
    </>
  )
}

export default App
