import { useRef } from "react";
import "../css/estilos-sitio-web.css";

export const CategRot = () => {
  const viewportRef = useRef(null);

  // 🔹 20 libros (URLs externas de prueba)
  const libros = [
    "https://covers.openlibrary.org/b/id/8228691-L.jpg",
    "https://covers.openlibrary.org/b/id/10521264-L.jpg",
    "https://covers.openlibrary.org/b/id/9874156-L.jpg",
    "https://covers.openlibrary.org/b/id/8231996-L.jpg",
    "https://covers.openlibrary.org/b/id/10958353-L.jpg",
    "https://covers.openlibrary.org/b/id/8235116-L.jpg",
    "https://covers.openlibrary.org/b/id/10522019-L.jpg",
    "https://covers.openlibrary.org/b/id/10523377-L.jpg",
    "https://covers.openlibrary.org/b/id/8235081-L.jpg",
    "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    "https://covers.openlibrary.org/b/id/8225265-L.jpg",
    "https://covers.openlibrary.org/b/id/10958392-L.jpg",
    "https://covers.openlibrary.org/b/id/8235261-L.jpg",
    "https://covers.openlibrary.org/b/id/8235044-L.jpg",
    "https://covers.openlibrary.org/b/id/8231910-L.jpg",
    "https://covers.openlibrary.org/b/id/8231822-L.jpg",
    "https://covers.openlibrary.org/b/id/8235031-L.jpg",
    "https://covers.openlibrary.org/b/id/10958311-L.jpg",
    "https://covers.openlibrary.org/b/id/8235048-L.jpg",
    "https://covers.openlibrary.org/b/id/8232004-L.jpg"
  ];
  
  const moverIzquierda = () => {
    const viewport = viewportRef.current;
    viewport.scrollTo({
      left: viewport.scrollLeft - 350,
      behavior: "smooth"
    });
  };
  
  const moverDerecha = () => {
    const viewport = viewportRef.current;
    viewport.scrollTo({
      left: viewport.scrollLeft + 350,
      behavior: "smooth"
    });
  };
  
  return (
    <table
      width="100%"
      border="0"
      align="center"
      cellPadding="0"
      cellSpacing="0"
      className="tabla-categorias-rotadores"
    >
      <tbody>
        <tr>
          <td>
            <div className="area-categorias-rotadores">

              {/* Flecha izquierda */}
              <button
                className="btn-rotador btn-izq"
                onClick={moverIzquierda}
              >
                ◀
              </button>

              {/* Flecha derecha */}
              <button
                className="btn-rotador btn-der"
                onClick={moverDerecha}
              >
                ▶
              </button>

              {/* Viewport */}
              <div className="rotador-viewport" ref={viewportRef}>
                <div className="rotador-libros">
                  {libros.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt={`Libro ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};