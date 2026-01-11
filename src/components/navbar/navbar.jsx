
import IconoCarrito from "./iconoCarrito.jsx";
import './navbar.css'
function Navbar() {
  return (
    
<nav class="navbar bg-primary navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <img class="logo navbar-brand" src="../src/assets/images/logo4.png" alt="Logo ElectrOulet"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Productos</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Pc Armadas</a></li>
            <li><a class="dropdown-item" href="#">Perifericos</a></li>
            <li><a class="dropdown-item" href="#">GPU</a></li>
            <li><a class="dropdown-item" href="#">Almacenamiento</a></li>
            <li><a class="dropdown-item" href="#">Memorias</a></li>
            <li><a class="dropdown-item" href="#">Mothers</a></li>
            <li><a class="dropdown-item" href="#">Procesadores</a></li>
            <li><a class="dropdown-item" href="#">Gabinetes</a></li>
            <li><a class="dropdown-item" href="#">Monitores</a></li>
            <li><a class="dropdown-item" href="#">Refrigeracion</a></li>       
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-disabled="true" href="#">< IconoCarrito /></a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>

</nav>
  )
}

export default Navbar

