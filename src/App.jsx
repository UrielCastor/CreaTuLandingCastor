import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Navbar } from './components/navbar';
import { ItemListContainer } from './components/ItemListContainer';


function App() {

  return (
    <>
      <Navbar /> 
      <ItemListContainer mensaje="Bienvenidos a ElectrOulet"/>

    </>
  )
}

export default App
