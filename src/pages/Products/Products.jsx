import { useEffect, useState } from "react";
import { obtenerProductos } from '../../../services/mocks/Products';
import { Card } from "../../components/Card";
import './products.css'
import { ComprarButton } from "../../components/BtnCmp/BtnCmp";
import { Link, useSearchParams } from "react-router";
const ListaProductos = () => {
  const [products, setProducts] = useState([]);
  const[queryParams, setQueryParams] = useSearchParams()
  
  useEffect(() => {
    obtenerProductos()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])
  return (
    
    <div className="">    
  <h1 className="titulop">Productos</h1>
      <div className="products-container">
      {products.map((product) => {
        return <Card 
        name={product.nombre} key={product.nombre} >
          <p className="card-price">Precio: ${product.precio}</p>
          <img className="card-image"  src={product.imagen} />
         <Link className="btn-ver" to={`/Product/${product.id}`}>Detalles</Link>
           <ComprarButton/>

        </Card>;
        
        
      }
      )}
      
      </div>
    </div>
 
  )
};
export { ListaProductos };
