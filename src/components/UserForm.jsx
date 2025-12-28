export const UserForm = () => {
  return (
    <div>
      <div className="mb-4 p-3 bg-white rounded">
        <h5>Ingreso de datos:</h5>
        <form>
          <div className="row">
            <div className="col">
              <label htmlFor="name">Nombre:</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="col">
              <label htmlFor="last_name">Apellido:</label>
              <input type="text" name="last_name" id="last_name" />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <label htmlFor="mail">Correo:</label>
              <input type="text" name="mail" id="mail" />
            </div>
            <div className="col">
              <label htmlFor="phone">Teléfono:</label>
              <input type="text" name="phone" id="phone" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}