import { useState } from 'react'
import './styles/App.css'
import Catalog from "./Components/Catalog";




function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Catalog/>

    </>

  )
}

export default App
