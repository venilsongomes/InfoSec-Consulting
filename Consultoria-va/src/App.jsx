import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Sobre from './pages/Sobre'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Navbar/>
      <Home />
      <Sobre/>
    </>
  )
}

export default App
