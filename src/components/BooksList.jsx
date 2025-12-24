import { useState } from "react";
import "../css/estilos-sitio-web.css";

/* ===============================
   📚 DATASET COMPLETO (40 LIBROS)
=============================== */
const libros = [
  /* ---- CIENCIA FICCIÓN (20) ---- */
  { titulo: "Dune", autor: "Frank Herbert", categoria: "Ciencia ficción", imagen: "https://covers.openlibrary.org/b/id/9874156-L.jpg" },
  { titulo: "Fundación", autor: "Isaac Asimov", categoria: "Ciencia ficción", imagen: "https://covers.openlibrary.org/b/id/8231996-L.jpg" },
  { titulo: "1984", autor: "George Orwell", categoria: "Ciencia ficción", imagen: "https://covers.openlibrary.org/b/id/8231822-L.jpg" },
  { titulo: "Fahrenheit 451", autor: "Ray Bradbury", categoria: "Ciencia ficción", imagen: "https://covers.openlibrary.org/b/id/10521264-L.jpg" },
  { titulo: "Neuromante", autor: "William Gibson", categoria: "Ciencia ficción", imagen: "https://covers.openlibrary.org/b/id/8235081-L.jpg" },
  { titulo: "Crónicas marcianas", autor: "Ray Bradbury", categoria: "Ciencia ficción", imagen: "https://covers.openlibrary.org/b/id/8235116-L.jpg" },
  { titulo: "Snow Crash", autor: "Neal Stephenson", categoria: "Ciencia ficción", imagen: "https://covers.openlibrary.org/b/id/8231856-L.jpg" },
  { titulo: "Solaris", autor: "Stanislaw Lem", categoria: "Ciencia ficción", imagen: "https://covers.openlibrary.org/b/id/8232004-L.jpg" },
  { titulo: "El juego de Ender", autor: "Orson Scott Card", categoria: "Ciencia ficción", imagen: "https://covers.openlibrary.org/b/id/8235261-L.jpg" },
  { titulo: "Blade Runner", autor: "Philip K. Dick", categoria: "Ciencia ficción", imagen: "https://covers.openlibrary.org/b/id/8231910-L.jpg" },
  { titulo: "Hyperion", autor: "Dan Simmons", categoria: "Ciencia ficción", imagen: "https://covers.openlibrary.org/b/id/8235048-L.jpg" },
  { titulo: "Ubik", autor: "Philip K. Dick", categoria: "Ciencia ficción", imagen: "https://covers.openlibrary.org/b/id/8235044-L.jpg" },
  { titulo: "La guerra de los mundos", autor: "H. G. Wells", categoria: "Ciencia ficción", imagen: "https://covers.openlibrary.org/b/id/10958311-L.jpg" },
  { titulo: "El hombre ilustrado", autor: "Ray Bradbury", categoria: "Ciencia ficción", imagen: "https://covers.openlibrary.org/b/id/8231996-L.jpg" },
  { titulo: "La máquina del tiempo", autor: "H. G. Wells", categoria: "Ciencia ficción", imagen: "https://covers.openlibrary.org/b/id/10522019-L.jpg" },
  { titulo: "El fin de la infancia", autor: "Arthur C. Clarke", categoria: "Ciencia ficción", imagen: "https://covers.openlibrary.org/b/id/8235031-L.jpg" },
  { titulo: "Proyecto Hail Mary", autor: "Andy Weir", categoria: "Ciencia ficción", imagen: "https://covers.openlibrary.org/b/id/10958353-L.jpg" },
  { titulo: "La ciudad y las estrellas", autor: "Arthur C. Clarke", categoria: "Ciencia ficción", imagen: "https://covers.openlibrary.org/b/id/10523377-L.jpg" },
  { titulo: "El problema de los tres cuerpos", autor: "Cixin Liu", categoria: "Ciencia ficción", imagen: "https://covers.openlibrary.org/b/id/8228691-L.jpg" },
  { titulo: "La mano izquierda de la oscuridad", autor: "Ursula K. Le Guin", categoria: "Ciencia ficción", imagen: "https://covers.openlibrary.org/b/id/8225265-L.jpg" },

  /* ---- CRECIMIENTO PERSONAL (20) ---- */
  { titulo: "Hábitos atómicos", autor: "James Clear", categoria: "Crecimiento personal", imagen: "https://covers.openlibrary.org/b/id/10523375-L.jpg" },
  { titulo: "El poder del ahora", autor: "Eckhart Tolle", categoria: "Crecimiento personal", imagen: "https://covers.openlibrary.org/b/id/10958365-L.jpg" },
  { titulo: "Los 7 hábitos", autor: "Stephen Covey", categoria: "Crecimiento personal", imagen: "https://covers.openlibrary.org/b/id/10958340-L.jpg" },
  { titulo: "Los cuatro acuerdos", autor: "Don Miguel Ruiz", categoria: "Crecimiento personal", imagen: "https://covers.openlibrary.org/b/id/10523320-L.jpg" },
  { titulo: "El monje que vendió su Ferrari", autor: "Robin Sharma", categoria: "Crecimiento personal", imagen: "https://covers.openlibrary.org/b/id/10523389-L.jpg" },
  { titulo: "Piense y hágase rico", autor: "Napoleon Hill", categoria: "Crecimiento personal", imagen: "https://covers.openlibrary.org/b/id/10523360-L.jpg" },
  { titulo: "Inteligencia emocional", autor: "Daniel Goleman", categoria: "Crecimiento personal", imagen: "https://covers.openlibrary.org/b/id/10958361-L.jpg" },
  { titulo: "El club de las 5 AM", autor: "Robin Sharma", categoria: "Crecimiento personal", imagen: "https://covers.openlibrary.org/b/id/10958391-L.jpg" },
  { titulo: "Cómo hacer amigos", autor: "Dale Carnegie", categoria: "Crecimiento personal", imagen: "https://covers.openlibrary.org/b/id/10958314-L.jpg" },
  { titulo: "El secreto", autor: "Rhonda Byrne", categoria: "Crecimiento personal", imagen: "https://covers.openlibrary.org/b/id/10958371-L.jpg" },
  { titulo: "Poder sin límites", autor: "Tony Robbins", categoria: "Crecimiento personal", imagen: "https://covers.openlibrary.org/b/id/10523395-L.jpg" },
  { titulo: "Mentalidad", autor: "Carol Dweck", categoria: "Crecimiento personal", imagen: "https://covers.openlibrary.org/b/id/10958354-L.jpg" },
  { titulo: "La magia del orden", autor: "Marie Kondo", categoria: "Crecimiento personal", imagen: "https://covers.openlibrary.org/b/id/10523311-L.jpg" },
  { titulo: "Despierta tu héroe", autor: "Victor Hugo Manzanilla", categoria: "Crecimiento personal", imagen: "https://covers.openlibrary.org/b/id/10958347-L.jpg" },
  { titulo: "Aprender a decir no", autor: "Walter Riso", categoria: "Crecimiento personal", imagen: "https://covers.openlibrary.org/b/id/10523382-L.jpg" },
  { titulo: "Vivir sin miedo", autor: "Sergio Fernández", categoria: "Crecimiento personal", imagen: "https://covers.openlibrary.org/b/id/10958308-L.jpg" },
  { titulo: "El código del dinero", autor: "Raimon Samsó", categoria: "Crecimiento personal", imagen: "https://covers.openlibrary.org/b/id/10523352-L.jpg" },
  { titulo: "Quién se ha llevado mi queso", autor: "Spencer Johnson", categoria: "Crecimiento personal", imagen: "https://covers.openlibrary.org/b/id/10523369-L.jpg" },
  { titulo: "El sutil arte de que no te importe", autor: "Mark Manson", categoria: "Crecimiento personal", imagen: "https://covers.openlibrary.org/b/id/10523382-L.jpg" },
  { titulo: "Desarrollo personal práctico", autor: "Brian Tracy", categoria: "Crecimiento personal", imagen: "https://covers.openlibrary.org/b/id/10958327-L.jpg" }
];

export const BooksList = () => {
  const [texto, setTexto] = useState("");
  const [autor, setAutor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [pagina, setPagina] = useState(1);
  
  const porPagina = 10;
  
  const filtrados = libros.filter(l =>
    l.titulo.toLowerCase().includes(texto.toLowerCase()) &&
    (autor === "" || l.autor === autor) &&
    (categoria === "" || l.categoria === categoria)
  );
  
  const totalPaginas = Math.ceil(filtrados.length / porPagina);
  const visibles = filtrados.slice((pagina - 1) * porPagina, pagina * porPagina);
  
  return (
    <table className="tabla-listado" width="100%">
      <tbody>
        {/* ===== BUSCADOR Y FILTROS ===== */}
        <tr>
          <td>
            <div className="area-buscador">
              <div className="buscador-contenedor">
                 <input className="form-control" placeholder="Buscar por título" value={texto} onChange={e => { setTexto(e.target.value); setPagina(1); }} />
                 <select className="form-select" value={autor} onChange={e => { setAutor(e.target.value); setPagina(1); }}>
                   <option value="">Todos los autores</option>
                   {[...new Set(libros.map(l => l.autor))].map(a => (
                     <option key={a} value={a}>{a}</option>
                   ))}
                 </select>
                 <select className="form-select" value={categoria} onChange={e => { setCategoria(e.target.value); setPagina(1); }} >
                   <option value="">Todas las categorías</option>
                   {[...new Set(libros.map(l => l.categoria))].map(c => (
                     <option key={c} value={c}>{c}</option>
                   ))}
                 </select>
              </div>
            </div>
          </td>
        </tr>
        {/* ===== LISTADO ===== */}
        <tr>
          <td className="area-listado">
            <div className="tabla-contenedor">
              <table className="table table-striped table-bordered align-middle text-center" align="center" width="80%" border="0">
                <thead className="table-dark">
                  <tr>
                    <th>Portada</th>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Categoría</th>
                  </tr>
                </thead>
                <tbody>
                  {visibles.map((l, i) => (
                    <tr key={i}>
                      <td><img src={l.imagen} alt={l.titulo} /></td>
                      <td>{l.titulo}</td>
                      <td>{l.autor}</td>
                      <td>{l.categoria}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* ===== PAGINACIÓN ===== */}
              <nav>
                <ul className="pagination justify-content-center">
                  {Array.from({ length: totalPaginas }).map((_, i) => (
                    <li key={i} className={`page-item ${pagina === i + 1 ? "active" : ""}`}>
                      <button className="page-link" onClick={() => setPagina(i + 1)}>
                        {i + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};