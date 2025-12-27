/**
 * Creado por: Gabby Zapata
 * Fecha: 2025-12-24
 * Descripción: Componente que contiene el Navbar con el logo, el nombre de la página y el menú de la aplicación
 * Contiene el objeto nav configurado con el framework de Bootstrap
 * @returns componente Navbar
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Navbar = () => {
  //Estado para controlar el colapso del menú
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  //Controlar qué menú está activo
  const [activeMenu, setActiveMenu] = useState('INI');

  //Handler para indicar el colapso del menú
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  //Función que implementa las dos funciones para el menú
  const handleMenu = (collapsed, idMenu) =>{
    setActiveMenu(idMenu);
    setIsNavCollapsed(collapsed);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/*TODO: Añadir un CSS para la imagen, para el tamaño y debemos revisar que el alt para personas discapasitadas funcione bien*/}
        <img
          src="/img/logo.png"
          alt="Logo Relatos de Papel"
          width="50"
          className="d-inline-block align-text-top me-2 text-dark"
        />
        <Link className="navbar-brand" to="/">Librería Relatos de Papel</Link>
        
        {/* Botón Toggler: agregamos el evento onClick */}
        <button 
          className="navbar-toggler" 
          type="button" 
          aria-controls="navbarSupportedContent" 
          aria-expanded={!isNavCollapsed ? true : false} 
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenedor colapsable: manejamos la clase 'show' condicionalmente */}
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
          <input class="field" type="search" placeholder="Search" aria-label="Search"/>
          <button class="button-blue" type="submit">Search</button>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={activeMenu === 'INI' ? "nav-link active" : "nav-link"} to="/" onClick={() => handleMenu(true, 'INI')}>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className={activeMenu === 'BUS' ? "nav-link active" : "nav-link"} to="/search" onClick={() => handleMenu(true, 'BUS')}>Categorías</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                <i className="bi bi-cart-fill"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}