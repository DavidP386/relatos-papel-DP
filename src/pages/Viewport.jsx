import React, { PureComponent } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Search, BookPage } from './Pages';
import { Navbar, Footer } from '../components/Components';

export const Viewport = () => {
  return (
    <>
      <Navbar />
      {/* El contenido entre Navbar y Footer cambia según la URL */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/book/:id" element={<BookPage />} />
          {/* Ruta por defecto si el usuario se pierde */}
          <Route path="*" element={<h1>404 - No encontrado</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}