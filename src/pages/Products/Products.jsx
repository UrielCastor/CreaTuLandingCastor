import { useEffect, useState } from "react";
import { obtenerProductos } from '../../../services/mocks/Products';
import { Card } from "../../components/Card";
import './products.css'


const ListaProductos = () => {

  const [products, setProducts] = useState([]);

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
      <h1 className="titulo">Productos</h1>
      <div className="products-container">
      {products.map((product) => {
        return <Card className name={product.nombre} >
          
          <p>Categoria: {product.categoria}</p>
          <p>Stock: {product.stock}</p>
          <p>Descripción: {product.descripcion}</p>
          <p className="card-price">Precio: ${product.precio}</p>
          <img className="card-image" src={product.imagen} />
        </Card>;
        
      }
      )}
      </div>
    </div>
 
  )
};
export { ListaProductos };
