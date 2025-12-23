import { useRef } from "react";
import "../css/estilos-sitio-web.css";

export const CategRot = () => {

  // ===============================
  // 🔹 CATEGORÍA 1: Ciencia Ficción
  // ===============================
  const refSciFi = useRef(null);

  const librosSciFi = [
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

  // ===============================
  // 🔹 CATEGORÍA 2: Crecimiento personal
  // ===============================
  const refGrowth = useRef(null);

  const librosGrowth = [
    "https://covers.openlibrary.org/b/id/10523320-L.jpg",
    "https://covers.openlibrary.org/b/id/10958365-L.jpg",
    "https://covers.openlibrary.org/b/id/10958361-L.jpg",
    "https://covers.openlibrary.org/b/id/10523389-L.jpg",
    "https://covers.openlibrary.org/b/id/10958340-L.jpg",
    "https://covers.openlibrary.org/b/id/10523311-L.jpg",
    "https://covers.openlibrary.org/b/id/10523348-L.jpg",
    "https://covers.openlibrary.org/b/id/10958308-L.jpg",
    "https://covers.openlibrary.org/b/id/10958327-L.jpg",
    "https://covers.openlibrary.org/b/id/10523352-L.jpg",
    "https://covers.openlibrary.org/b/id/10958371-L.jpg",
    "https://covers.openlibrary.org/b/id/10523369-L.jpg",
    "https://covers.openlibrary.org/b/id/10523375-L.jpg",
    "https://covers.openlibrary.org/b/id/10958391-L.jpg",
    "https://covers.openlibrary.org/b/id/10523395-L.jpg",
    "https://covers.openlibrary.org/b/id/10958314-L.jpg",
    "https://covers.openlibrary.org/b/id/10958347-L.jpg",
    "https://covers.openlibrary.org/b/id/10523382-L.jpg",
    "https://covers.openlibrary.org/b/id/10958354-L.jpg",
    "https://covers.openlibrary.org/b/id/10523360-L.jpg"
  ];

  // ===============================
  // 🔹 FUNCIONES GENÉRICAS
  // ===============================
  const mover = (ref, desplazamiento) => {
    ref.current.scrollTo({
      left: ref.current.scrollLeft + desplazamiento,
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

        {/* ===============================
            🔹 CARRUSEL 1
        =============================== */}
        <tr>
          <td>
            <h3 className="titulo-categoria">Ciencia ficción</h3>

            <div className="area-categorias-rotadores">
              <button
                className="btn-rotador btn-izq"
                onClick={() => mover(refSciFi, -350)}
              >
                ◀
              </button>

              <button
                className="btn-rotador btn-der"
                onClick={() => mover(refSciFi, 350)}
              >
                ▶
              </button>

              <div className="rotador-viewport" ref={refSciFi}>
                <div className="rotador-libros">
                  {librosSciFi.map((url, i) => (
                    <img key={i} src={url} alt={`Libro SciFi ${i}`} />
                  ))}
                </div>
              </div>
            </div>
          </td>
        </tr>

        {/* ===============================
            🔹 CARRUSEL 2
        =============================== */}
        <tr>
          <td>
            <h3 className="titulo-categoria">Crecimiento personal</h3>

            <div className="area-categorias-rotadores">
              <button
                className="btn-rotador btn-izq"
                onClick={() => mover(refGrowth, -350)}
              >
                ◀
              </button>

              <button
                className="btn-rotador btn-der"
                onClick={() => mover(refGrowth, 350)}
              >
                ▶
              </button>

              <div className="rotador-viewport" ref={refGrowth}>
                <div className="rotador-libros">
                  {librosGrowth.map((url, i) => (
                    <img key={i} src={url} alt={`Libro Growth ${i}`} />
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