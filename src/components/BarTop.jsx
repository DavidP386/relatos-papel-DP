export const BarTop = () => {
  return (
    <div className="row barra gx-0 w-100">
      <div className="col-6 recomendaciones text-white">
        Recomendaciones personalizadas<br />
        <img src="/img/libreria.png" height="60" alt="Libros" />
      </div>
      <div className="col-6 comunidad text-dark">
        Comunidad de lectores <br />
        <img src="/img/comunidad.png" height="60" alt="Libros" />
      </div>
    </div>
  );
}