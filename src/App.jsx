import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/navbar/navbar.jsx'
import ItemListContainer from './components/listaproductos/ItemListContainer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar /> 
      <ItemListContainer mensaje="Bienvenidos a ElectrOulet"/>

    </>
  )
}

export default App
