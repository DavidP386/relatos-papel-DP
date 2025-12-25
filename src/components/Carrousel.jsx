import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { BookCard } from './BookCard';
//Mis datos
import { Books, Categories } from '../data/Data';

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';

export const Carrousel = () => {

  const [clickedBook, setClickedBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (clickedBook !== null) {
      navigate(`/book/${clickedBook}`);
    }
  }, [clickedBook, navigate]);

  return (
    <div className="container-fluid text-dark py-5 min-vh-100">
      {Categories.map((cat) => (
        <div key={cat.id_category} className="mb-5">
          <h4 className="mb-4 fw-bold">{cat.name_category}</h4>
          
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={10}
            slidesPerView={3} // Móvil
            breakpoints={{
              640: { slidesPerView: 6 },
              1024: { slidesPerView: 10 },
              1440: { slidesPerView: 12 },
            }}
            className="px-4 py-3 rounded-border back-gray"
          >
            {Books.filter(book => book.id_category === cat.id_category).map((book, index) => (
              <SwiperSlide onClick={() => setClickedBook(book.id_book)} key={index}>
                <BookCard book={book} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
}