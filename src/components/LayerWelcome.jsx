/**
 * Creado por: Gabby Zapata
 * Fecha: 2025-12-30
 * Descripción: Componente que contiene el efecto del Welcome para la primera visualización
 * @returns componente LayerWelcome
 */

import { Spinner } from "react-bootstrap";

export const LayerWelcome = ({ aparece }) => {
  if (aparece) {
    return (
      <div className="welcome-screen">
        <div className="welcome-box">
          <h1 className="logo-text">Relatos de Papel</h1>
          <Spinner className="spinner-color" />
          <p className="loading-text">Abriendo las puertas...</p>
        </div>
      </div>
    );
  }
}