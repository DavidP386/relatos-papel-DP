import { useRef } from "react";
import "../css/estilos-sitio-web.css";

export const CategRot = () => {
  
  // ===============================
  // 🔹 CATEGORÍA 1: Ciencia Ficción (20)
  // ===============================
  const refSciFi = useRef(null);
  
  const librosSciFi = [
    { titulo: "Dune", imagen: "https://covers.openlibrary.org/b/id/9874156-L.jpg" },
    { titulo: "Fahrenheit 451", imagen: "https://covers.openlibrary.org/b/id/10521264-L.jpg" },
    { titulo: "El problema de los tres cuerpos", imagen: "https://covers.openlibrary.org/b/id/8228691-L.jpg" },
    { titulo: "Fundación", imagen: "https://covers.openlibrary.org/b/id/8231996-L.jpg" },
    { titulo: "Crónicas marcianas", imagen: "https://covers.openlibrary.org/b/id/8235116-L.jpg" },
    { titulo: "Neuromante", imagen: "https://covers.openlibrary.org/b/id/8235081-L.jpg" },
    { titulo: "Solaris", imagen: "https://covers.openlibrary.org/b/id/8232004-L.jpg" },
    { titulo: "Snow Crash", imagen: "https://covers.openlibrary.org/b/id/8231856-L.jpg" },
    { titulo: "La mano izquierda de la oscuridad", imagen: "https://covers.openlibrary.org/b/id/8225265-L.jpg" },
    { titulo: "Proyecto Hail Mary", imagen: "https://covers.openlibrary.org/b/id/10958353-L.jpg" },
    { titulo: "Blade Runner", imagen: "https://covers.openlibrary.org/b/id/8231910-L.jpg" },
    { titulo: "1984", imagen: "https://covers.openlibrary.org/b/id/8231822-L.jpg" },
    { titulo: "El fin de la infancia", imagen: "https://covers.openlibrary.org/b/id/8235031-L.jpg" },
    { titulo: "La guerra de los mundos", imagen: "https://covers.openlibrary.org/b/id/10958311-L.jpg" },
    { titulo: "Hyperion", imagen: "https://covers.openlibrary.org/b/id/8235048-L.jpg" },
    { titulo: "El juego de Ender", imagen: "https://covers.openlibrary.org/b/id/8235261-L.jpg" },
    { titulo: "Ubik", imagen: "https://covers.openlibrary.org/b/id/8235044-L.jpg" },
    { titulo: "La máquina del tiempo", imagen: "https://covers.openlibrary.org/b/id/10522019-L.jpg" },
    { titulo: "La ciudad y las estrellas", imagen: "https://covers.openlibrary.org/b/id/10523377-L.jpg" },
    { titulo: "El hombre ilustrado", imagen: "https://covers.openlibrary.org/b/id/8231996-L.jpg" }
  ];
  
  // ===============================
  // 🔹 CATEGORÍA 2: Crecimiento Personal (20)
  // ===============================
  const refGrowth = useRef(null);
  
  const librosGrowth = [
    { titulo: "Los 7 hábitos", imagen: "https://covers.openlibrary.org/b/id/10958340-L.jpg" },
    { titulo: "El poder del ahora", imagen: "https://covers.openlibrary.org/b/id/10958365-L.jpg" },
    { titulo: "Hábitos atómicos", imagen: "https://covers.openlibrary.org/b/id/10523375-L.jpg" },
    { titulo: "Los cuatro acuerdos", imagen: "https://covers.openlibrary.org/b/id/10523320-L.jpg" },
    { titulo: "El monje que vendió su Ferrari", imagen: "https://covers.openlibrary.org/b/id/10523389-L.jpg" },
    { titulo: "Piense y hágase rico", imagen: "https://covers.openlibrary.org/b/id/10523360-L.jpg" },
    { titulo: "Inteligencia emocional", imagen: "https://covers.openlibrary.org/b/id/10958361-L.jpg" },
    { titulo: "El código del dinero", imagen: "https://covers.openlibrary.org/b/id/10523352-L.jpg" },
    { titulo: "Padre rico padre pobre", imagen: "https://covers.openlibrary.org/b/id/10523348-L.jpg" },
    { titulo: "El secreto", imagen: "https://covers.openlibrary.org/b/id/10958371-L.jpg" },
    { titulo: "Quién se ha llevado mi queso", imagen: "https://covers.openlibrary.org/b/id/10523369-L.jpg" },
    { titulo: "El club de las 5 AM", imagen: "https://covers.openlibrary.org/b/id/10958391-L.jpg" },
    { titulo: "Poder sin límites", imagen: "https://covers.openlibrary.org/b/id/10523395-L.jpg" },
    { titulo: "Cómo hacer amigos", imagen: "https://covers.openlibrary.org/b/id/10958314-L.jpg" },
    { titulo: "Despierta tu héroe", imagen: "https://covers.openlibrary.org/b/id/10958347-L.jpg" },
    { titulo: "El sutil arte de que no te importe", imagen: "https://covers.openlibrary.org/b/id/10523382-L.jpg" },
    { titulo: "Mentalidad", imagen: "https://covers.openlibrary.org/b/id/10958354-L.jpg" },
    { titulo: "La magia del orden", imagen: "https://covers.openlibrary.org/b/id/10523311-L.jpg" },
    { titulo: "Aprender a decir no", imagen: "https://covers.openlibrary.org/b/id/10523382-L.jpg" },
    { titulo: "Vivir sin miedo", imagen: "https://covers.openlibrary.org/b/id/10958308-L.jpg" }
  ];
  
  // ===============================
  // 🔹 FUNCIÓN DE SCROLL
  // ===============================
  const mover = (ref, delta) => {
    ref.current.scrollTo({
      left: ref.current.scrollLeft + delta,
      behavior: "smooth"
    });
  };
  
  return (
    <table width="100%" border="0" cellPadding="0" cellSpacing="0" className="tabla-categorias-rotadores">
      <tbody>
        {/* ===== CARRUSEL 1 ===== */}
        <tr>
          <td>
            <h3 className="titulo-categoria">Ciencia ficción</h3>
            <div className="area-categorias-rotadores">
              <button className="btn-rotador btn-izq" onClick={() => mover(refSciFi, -400)}>◀</button>
              <button className="btn-rotador btn-der" onClick={() => mover(refSciFi, 400)}>▶</button>

              <div className="rotador-viewport" ref={refSciFi}>
                <div className="rotador-libros">
                  {librosSciFi.map((libro, i) => (
                    <div className="libro-item" key={i}>
                      <img src={libro.imagen} alt={libro.titulo} />
                      <div className="titulo-libro">{libro.titulo}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </td>
        </tr>
        {/* ===== CARRUSEL 2 ===== */}
        <tr>
          <td>
            <h3 className="titulo-categoria">Crecimiento personal</h3>
            <div className="area-categorias-rotadores">
              <button className="btn-rotador btn-izq" onClick={() => mover(refGrowth, -400)}>◀</button>
              <button className="btn-rotador btn-der" onClick={() => mover(refGrowth, 400)}>▶</button>
              <div className="rotador-viewport" ref={refGrowth}>
                <div className="rotador-libros">
                  {librosGrowth.map((libro, i) => (
                    <div className="libro-item" key={i}>
                      <img src={libro.imagen} alt={libro.titulo} />
                      <div className="titulo-libro">{libro.titulo}</div>
                    </div>
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