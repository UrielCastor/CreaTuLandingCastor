
import IconoCarrito from "./iconoCarrito.jsx";
import './navbar.css'
function Navbar() {
  return (
    
<nav class="navbar bg-primary navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid contenedornavbar">
    <img class="logo navbar-brand" src="../src/assets/images/logo4.png" alt="Logo ElectrOulet"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Productos</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item nav-link" href="#">Pc Armadas</a></li>
            <li><a class="dropdown-item nav-link" href="#">Perifericos</a></li>
            <li><a class="dropdown-item nav-link" href="#">GPU</a></li>
            <li><a class="dropdown-item nav-link" href="#">Almacenamiento</a></li>
            <li><a class="dropdown-item nav-link" href="#">Memorias</a></li>
            <li><a class="dropdown-item nav-link" href="#">Mothers</a></li>
            <li><a class="dropdown-item nav-link" href="#">Procesadores</a></li>
            <li><a class="dropdown-item nav-link" href="#">Gabinetes</a></li>
            <li><a class="dropdown-item nav-link" href="#">Monitores</a></li>
            <li><a class="dropdown-item nav-link" href="#">Refrigeracion</a></li>       
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
       <a class="nav-link carrito" aria-disabled="true" href="#">< IconoCarrito /></a>
      </form>
    </div>
  </div>

</nav>
  )
}

export {Navbar};

