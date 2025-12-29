/**
 * Creado por: Gabby Zapata
 * Modificado por: Hernan Nuñez
 * Fecha: 2025-12-27
 * Descripción: Componente que contiene la información del libro recibido como parámetro
 * Contiene varios divs estructurados con breakpoints, márgenes y paddings de Bootstrap
 * @returns componente BookInfo
 */

import { useNavigate } from 'react-router-dom';
import { BookForm } from "./Components";
import { Categories, BooksPerCategory } from "../data/Data";

export const BookInfo = ({ book }) => {
  
  //Se coloca el navigate para ir hacia atrás
  const navigate = useNavigate();
  //Estos filtros son para extraer todas las categorías a las que pertenece el libro para imprimirlas
  const categoriesOfThisBook = BooksPerCategory
    .filter(item => item.id_book === book.id_book)
    .map(item => item.id_category);
  const categories = Categories.filter(item => categoriesOfThisBook.includes(item.id_category))
  const listado = categories
    .map(cat => cat.name_category)
    .toString();

  return (
    <div className="row justify-content-center">
      <div className="col-auto p-lg-4 rounded-border back-gray">
        <img src={book.img_url} height="250" alt="" />
      </div>
      <div className='d-none d-sm-block col-lg-auto'></div>
      <div className="col-6 p-4 rounded-border back-gray text-dark">
        <div className='mb-4'>
          <a href="#" onClick={() => navigate(-1)}>
            <i className="bi bi-skip-backward-fill"></i>
            &nbsp;&nbsp;Regresar
          </a>
        </div>
        <h3>{book.title}</h3><br />
        <span className='small'>
          <b>Autor:</b> {book.author} |
          <b>Categoría:</b> {listado} |
          <b>Año publicación:</b> {book.publication_year}
        </span><br />
        <p className='mt-2'>
          {book.synopsis}
        </p>
        {/* Campos para la compra */}
        <BookForm
          book={book}
        />
      </div>
    </div>
  );
}