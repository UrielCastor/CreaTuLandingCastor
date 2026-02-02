import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { obtenerProductos } from '../../../services/mocks/Products';
import { Card } from "../../components/Card";
import './products.css'
import { ComprarButton } from "../../components/BtnCmp/BtnCmp";
import { Link } from "react-router";



 const Cat = () => {
  const { cat } = useParams();   // obtenemos la categoría de la URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    obtenerProductos().then((response) => {
      if (response.success) {
        // filtramos por categoría
        const filtered = response.data.filter(p => p.categoria === cat);
        setProducts(filtered);
      }
    });
  }, [cat]);

  return (
    <div className="">
      <h1 className="titulop">{cat}</h1>
      <div className="products-container">
        {products.map(product => (
          <Card name={product.nombre} key={product.id}>
            <p className="card-price">Descripcion: {product.descripcion}</p>
            <img className="card-image" src={`/${product.imagen}`} alt={product.nombre} />
            <p className="card-price">Precio: ${product.precio}</p>
            <ComprarButton />
            <Link to={`/Product/${product.id}`} className="btn-ver">Detalles</Link>
          </Card>
        ))}
        {products.length === 0 && <p>No hay productos en esta categoría.</p>}
      </div>
    </div>
  );
};
export {Cat};