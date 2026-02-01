import './App.css'
import { Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Navbar } from './components/navbar/index.jsx';
import { ListaProductos } from './pages/products/Products.jsx';
import { Contact } from './pages/Contact/Contact';




function App() {

  return (
    <>
   
      <Navbar/>
    
      <Routes>
        
        <Route path="/Products" element={<ListaProductos />} />
        <Route path="/Contact" element={<Contact />} />
     </Routes>

    </>

  )
}

export default App; 