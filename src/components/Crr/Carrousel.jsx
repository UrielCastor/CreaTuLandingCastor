import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import ram32dd5 from '../../assets/images/imgstore/ram32dd5.jpg';
import monitor165 from '../../assets/images/imgstore/monitor165.jpg';
import rtx4070 from '../../assets/images/imgstore/rtx4070.jpg';
import pcryzen5 from '../../assets/images/imgstore/pcryzen5.jpg';
import teclado from '../../assets/images/imgstore/teclado.jpg';
import "./Carrousel.css"

function DarkCarrousel() {
  
  return (
    
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div className="carousel-img-container">
          <img
            className="d-block car-image"
            src={monitor165}
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <h5>Monitor 165HZ </h5>
          <p>Montor con exelente tasa de refresco ideal para tus tardes de juego.</p>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-img-container">
          <img
            className="d-block car-image"
            src={ram32dd5}
            alt="Second slide"
          />
        </div>
        <Carousel.Caption>
          <h5>Ram 32GB</h5>
          <p>32GB de ram funcionando a 6000MHz para que no sufras ningun bajon de fps.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-img-container">
          <img
            className="car-image"
            src={rtx4070}
            alt="Third slide"
          />
        </div>
        <Carousel.Caption>
          <h5>RTX 4070 12gb</h5>
          <p>
            Una bestia para los ultimos juegos del mercado, actualizate y no reniegues mas.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-img-container">
          <img
            className="car-image"
            src={pcryzen5}
            alt="Third slide"
          />
        </div>
        <Carousel.Caption>
          <h5>PC Master R7</h5>
          <p>
            Una bestia equipada con lo ultimo en tecnologia, armada por nuestro staff.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-img-container">
          <img
            className="car-image"
            src={teclado}
            alt="Third slide"
          />
        </div>
        <Carousel.Caption>
          <h5>Yama k550</h5>
          <p>
            El monstruo de Red Dragon, un teclado 100% mecanico con mas de 12 macros para configurar a tu gusto.
          </p>
        </Carousel.Caption>
      </Carousel.Item>



    </Carousel>
  );
}

export { DarkCarrousel };