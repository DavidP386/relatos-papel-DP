import { Spinner } from "react-bootstrap";

export const LayerWelcome = ({ aparece }) => {
  if (aparece) {
    return (
      <div className="welcome-screen">
        <div className="welcome-box">
          <h1 className="logo-text">Relatos de Papel</h1>
          <div className="simple-spinner"></div>
          <p className="loading-text">Abriendo las puertas...</p>
        </div>
      </div>
    );
  }
}