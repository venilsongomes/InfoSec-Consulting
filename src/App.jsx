import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Sobre from './pages/Sobre'
import Servicos from './pages/Servicos'
import Contato from './pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Navbar/>
      <Home />
      <Sobre/>
      <Servicos/>
      <Contato/>
    </>
  )
}

export default App
