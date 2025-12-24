import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <img
          src="/img/logo.png"
          alt="Logo"
          width="50"
          className="d-inline-block align-text-top me-2"
        />
        <a class="navbar-brand" href="#">Librería Relatos de Papel</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link className="nav-link active"  to="/">Inicio</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link"  to="/search">Búsqueda</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <img src="/img/shoppincart.png" width="25" alt="Shopping-cart" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}