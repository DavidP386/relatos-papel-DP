export const BarTop = () => {
  return (
    <div className="row barra gx-0 w-100">
      <div className="col-6 recomendaciones text-white">
        <div className="mt-5">Recomendaciones personalizadas</div>
        <div className="mb-2"><img src="/img/libreria.png" height="60" alt="Libros" /></div>
      </div>
      <div className="col-6 comunidad text-dark">
        <div className="mt-5">Comunidad de lectores</div>
        <div className="mb-2"><img src="/img/comunidad.png" height="60" alt="Libros" /></div>
      </div>
    </div>
  );
}