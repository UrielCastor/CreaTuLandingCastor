
import React from "react";
import IconoCarrito from "./iconoCarrito.jsx";
import { NavLink } from "react-router";
import { Link } from "react-router";
import './navbar.css'
const Navbar = () => {
  return (

    <nav class="navbar bg-primary navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid contenedornavbar">
        <img class="logo navbar-brand" src="../src/assets/images/logo4.png" alt="Logo ElectrOulet" />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <NavLink className="nav-link" to="/" end>
              Inicio
            </NavLink>
            <NavLink className="nav-link" to="/Products" end>
              Productos
            </NavLink>
            <NavLink className="nav-link" to="/Contact" end>
              Contacto
            </NavLink>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item nav-link" to="/Categoria/PC">Pc Armadas</Link></li>
                <li><Link className="dropdown-item nav-link" to="/Categoria/Perifericos">Perifericos</Link></li>
                <li><Link className="dropdown-item nav-link" to="/Categoria/GPU">GPU</Link></li>
                <li><Link className="dropdown-item nav-link" to="/Categoria/Almacenamiento">Almacenamiento</Link></li>
                <li><Link className="dropdown-item nav-link" to="/Categoria/Memorias">Memorias</Link></li>
                <li><Link className="dropdown-item nav-link" to="/Categoria/Mothers">Mothers</Link></li>
                <li><Link className="dropdown-item nav-link" to="/Categoria/Procesadores">Procesadores</Link></li>
                <li><Link className="dropdown-item nav-link" to="/Categoria/Gabinetes">Gabinetes</Link></li>
                <li><Link className="dropdown-item nav-link" to="/Categoria/Monitores">Monitores</Link></li>
                <li><Link className="dropdown-item nav-link" to="/Categoria/Refrigeracion">Refrigeracion</Link></li>
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
};

export { Navbar };

